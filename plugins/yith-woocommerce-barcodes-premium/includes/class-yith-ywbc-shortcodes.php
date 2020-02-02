<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'YITH_YWBC_Shortcodes' ) ) {
	
	/**
	 *
	 * @class   YITH_YWBC_Shortcodes
	 * @package Yithemes
	 * @since   1.0.0
	 * @author  Your Inspiration Themes
	 */
	class YITH_YWBC_Shortcodes {
		
		/**
		 * Single instance of the class
		 *
		 * @since 1.0.0
		 */
		protected static $instance;
		
		public static function get_instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}
			
			return self::$instance;
		}
		
		/**
		 * Constructor
		 *
		 * Initialize plugin and registers actions and filters to be used
		 *
		 * @since  1.0
		 * @author Lorenzo Giuffrida
		 */
		protected function __construct() {
			
			/**
			 * Add a shortcode for rendering a barcode
			 */
			add_shortcode( "yith_render_barcode", array(
				$this,
				"yith_render_barcode"
			) );
			
			/**
			 * Add a shortcode for searching for a order barcode value
			 */
			add_shortcode( "yith_order_barcode", array(
				$this,
				"yith_order_barcode"
			) );
			
			/**
			 * Add a shortcode for searching for a product barcode value
			 */
			add_shortcode( "yith_product_barcode", array(
				$this,
				"yith_product_barcode"
			) );
			
			/**
			 * Manage a search barcode value for products from the form generated by the shortcode
			 */
			add_filter( 'yith_barcode_action_product_search', array(
				$this,
				'yith_barcode_action_product_search'
			), 10, 2 );
			
			/**
			 * Manage a search barcode value for products from the form generated by the shortcode
			 */
			add_filter( 'yith_barcode_action_shop_order_complete_order', array(
				$this,
				'yith_barcode_action_shop_order_complete_order'
			), 10, 2 );
			
			/**
			 * Manage a search barcode value for products from the form generated by the shortcode
			 */
			add_filter( 'yith_barcode_action_shop_order_search', array(
				$this,
				'yith_barcode_action_shop_order_search'
			), 10, 2 );
			
			/**
			 * Manage request from the form generated by the shortcode
			 */
			add_action( 'wp_ajax_barcode_actions', array(
                $this,
                'manage_barcode_actions_callback'
            ) );

            add_action( 'wp_ajax_nopriv_barcode_actions', array(
                $this,
                'manage_barcode_actions_callback'
            ) );

			/**
			 * Manage request from the form generated by the shortcode for the orders
			 */
			add_action( 'wp_ajax_barcode_actions_search_shop_order', array(
				$this,
				'manage_barcode_search_callback'
			) );

            add_action( 'wp_ajax_nopriv_barcode_actions_search_shop_order', array(
                $this,
                'manage_barcode_search_callback'
            ) );
			
			add_action( 'wp_ajax_apply_barcode_action', array(
				$this,
				'set_barcode_status'
			) );

            add_action( 'wp_ajax_nopriv_apply_barcode_action', array(
                $this,
                'set_barcode_status'
            ) );
			
			/**
			 * Manage request from the form generated by the shortcode for the orders
			 */
			add_action( 'wp_ajax_barcode_actions_search_product', array(
				$this,
				'manage_barcode_search_callback'
			) );

            add_action( 'wp_ajax_nopriv_barcode_actions_search_product', array(
                $this,
                'manage_barcode_search_callback'
            ) );
		}
		
		public function set_barcode_status() {
			if ( ! isset( $_POST["id"] ) || ! isset( $_POST['status'] ) ) {
				die();
			}
			
			$id              = intval( sanitize_text_field( $_POST["id"] ) );
			$status          = sanitize_text_field( $_POST['status'] );
			$type            = sanitize_text_field( $_POST['type'] );
			$barcode_actions = $_POST['barcode-actions'];
			//  This callback is shared among all barcode search function
			//  Set some value based on the object type
			$template = '';
			$object   = null;
			
			if ( 'order' == $type ) {
				$object = wc_get_order( $id );
				if ( $object ) {
					if( $status == 'check-in-ticket' && defined('YITH_WCEVTI_PREMIUM') ){
						yith_wcevti_check_all_order_tickets_in( $id );
					}else{
						$status_result = $object->set_status( $status );
						$object->save();

						$code   = $status_result['to'] == $status;
						$result = array(
							'code' => $code ? 1 : - 1,
						);
					}

				}
				
				$template = 'shortcode/ywbc-search-orders-row.php';
			} elseif ( 'product' == $type ) {
				$object   = wc_get_product( $id );
				$template = 'shortcode/ywbc-search-products-row.php';
				
				if ( ( 'increase-stock' == $status ) ||
				     ( 'decrease-stock' == $status )
				) {
					$unit       = ( 'increase-stock' == $status ) ? 1 : - 1;
					$stock_unit = $object->get_stock_quantity();
					$object->set_stock_quantity( $stock_unit + $unit );
					$object->save();
				}
				if( ( 'add-to-cart' == $status ) ){
					WC()->cart->add_to_cart( $id, 1 );
				}
			}

			$object   = apply_filters( 'yith_set_barcode_status_object', $object );
			$template = apply_filters( 'yith_set_barcode_status_template', $template );
			
			
			ob_start();
			wc_get_template( $template,
				array(
					'object'          => $object,
					'barcode_actions' => $barcode_actions
				),
				YITH_YWBC_TEMPLATES_DIR,
				YITH_YWBC_TEMPLATES_DIR
			);
			
			$content = ob_get_clean();
			
			$result['code']  = 1;
			$result['items'] = $content;
			
			wp_send_json( $result );
		}
		
		public function manage_barcode_search_callback() {
			if ( ! isset( $_POST["text"] ) || ! isset( $_POST['barcode-actions'] ) ) {
				die();
			}
			
			$text            = sanitize_text_field( $_POST["text"] );
			$barcode_actions = $_POST['barcode-actions'];
			
			$result = array(
				'code'  => - 1,
				'value' => __( 'The selected action could not be performed', 'yith-woocommerce-barcodes' ),
			);
			
			//  This callback is shared among all barcode search function
			//  Set some value based on the object type
			$current_filter = current_filter();
			$template       = '';

			if ( 'wp_ajax_barcode_actions_search_shop_order' == $current_filter || 'wp_ajax_barcode_nopriv_actions_search_shop_order' == $current_filter ) {
				$items = $this->barcode_action_search(
					$text,
					'shop_order'
				);
				
				$template = 'shortcode/ywbc-search-orders.php';
			} elseif ( 'wp_ajax_barcode_actions_search_product' == $current_filter || 'wp_ajax_nopriv_barcode_actions_search_product' == $current_filter ) {
				$items    = $this->barcode_action_search(
					$text,
					array( 'product', 'product_variation' )
				);
				$template = 'shortcode/ywbc-search-products.php';
			}
			
			$items    = apply_filters( 'yith_barcode_ajax_callback_search_items', $items );
			$template = apply_filters( 'yith_barcode_ajax_callback_search_template', $template );

			do_action('yith_barcode_before_load_template_barcode_actions',$items);

			ob_start();
			wc_get_template( $template,
				array(
					'posts'           => $items,
					'barcode_actions' => $barcode_actions,
					'title'           => apply_filters( 'yith_barcode_search_orders_title',
						__( 'Matching results', 'yith-woocommerce-barcodes' ) ),
				),
				YITH_YWBC_TEMPLATES_DIR,
				YITH_YWBC_TEMPLATES_DIR
			);
			
			$content = ob_get_clean();
			
			$result['code']  = 1;
			$result['items'] = $content;
			
			wp_send_json( $result );
		}
		
		
		public function manage_barcode_actions_callback() {
			
			if ( ! isset( $_POST["type"] ) || ! isset( $_POST["text"] ) || ! isset( $_POST["value"] ) ) {
				return;
			}
			$text   = sanitize_text_field( $_POST["text"] );
			$action = sanitize_text_field( $_POST["value"] );
			$type   = sanitize_text_field( $_POST["type"] );
			
			$result = array(
				'code'  => - 1,
				'value' => __( 'The selected action could not be performed', 'yith-woocommerce-barcodes' ),
			);
			
			
			$result = apply_filters( 'yith_barcode_action_' . $type . '_' . $action, $result, $text );
			wp_send_json( $result );
		}
		
		/**
		 * Manage the shortcode 'yith_render_barcode' for rendering a barcode by object id or with specific value
		 *
		 * @param array $atts the shortcode attributes
		 *
		 * @return string
		 */
		public function yith_render_barcode( $atts ) {
			$fields = shortcode_atts( array(
				'id'            => 0,
				'hide_if_empty' => 1,
				'value'         => '',
				'protocol'      => 'EAN8',
				'inline_css'    => '',
				'layout'        => ''
			), $atts );
			
			ob_start();
			
			//  if id>0 show the barcode for a specific object
			if ( $fields['id'] ) {
				YITH_YWBC()->show_barcode( $fields['id'], $fields['hide_if_empty'], $fields['inline_css'], $fields['layout'] );
			} elseif ( $fields['value'] ) {
				//  Show barcode with specific value and protocol
				$barcode  = new YITH_Barcode();
				$protocol = $fields['protocol'];
				$value    = $fields['value'];
				
				$barcode->generate( $protocol, $value );
				YITH_YWBC()->show_barcode( $barcode, $fields['hide_if_empty'], $fields['inline_css'], $fields['layout'] );
			}
			
			return ob_get_clean();
		}
		
		/**
		 * Manage the shortcode 'yith_order_barcode'
		 *
		 * @param array $atts the shortcode attributes
		 *
		 * @return string
		 */
		public function yith_order_barcode( $atts ) {
			
			$fields = shortcode_atts(
				array(
					'search_type' => 'shop_order',
					'capability'  => 'manage_woocommerce',
					'style'       => 'buttons',
					'actions'     => 'completed, processing',
				),
				$atts );
			
			ob_start();
			wc_get_template( 'shortcode/ywbc-barcode-actions.php',
				array(
					'fields' => $fields,
					'title'  => apply_filters( 'yith_search_order_barcode_title',
						_x( 'Order barcode',
							'title for product barcode form',
							'yith-woocommerce-barcodes' ) ),
				),
				YITH_YWBC_TEMPLATES_DIR,
				YITH_YWBC_TEMPLATES_DIR
			);
			$content = ob_get_clean();
			
			return $content;
		}
		
		/**
		 * Manage the shortcode 'yith_product_barcode'
		 *
		 * @param array $atts the shortcode attributes
		 *
		 * @return string
		 */
		public function yith_product_barcode( $atts ) {
			
			$fields = shortcode_atts(
				array(
					'search_type' => 'product',
					'capability'  => 'manage_woocommerce',
					'style'       => 'buttons',
					'actions'     => 'increase stock, decrease stock',
				),
				$atts );

			ob_start();
			wc_get_template( 'shortcode/ywbc-barcode-actions.php',
				array(
					'fields' => $fields,
					'title'  => apply_filters( 'yith_search_product_barcode_title',
						_x( 'Product barcode',
							'title for product barcode form',
							'yith-woocommerce-barcodes' ) ),
				),
				YITH_YWBC_TEMPLATES_DIR,
				YITH_YWBC_TEMPLATES_DIR
			);
			
			$content = ob_get_clean();
			
			return $content;
		}
		
		
		/**
		 * Manage a search for barcode value on orders
		 *
		 * @param array  $result the result for the current action
		 * @param string $text   the text entered by the user
		 *
		 *
		 * @return string
		 * @author Lorenzo Giuffrida
		 * @since  1.0.0
		 */
		public function yith_barcode_action_shop_order_complete_order( $result, $text ) {
			$items = $this->barcode_action_search(
				$text,
				'shop_order'
			);
			
			$current_user = wp_get_current_user();
			if ( $current_user ) {
				$message = sprintf( __( 'Order status set by %s through YITH WooCommerce Barcodes.', 'yith-woocommerce-barcodes' ), $current_user->display_name );
			} else {
				$message = __( 'Order status set through YITH WooCommerce Barcodes.', 'yith-woocommerce-barcodes' );
				
			}
			foreach ( $items as $post ) {
				$order = wc_get_order( $post );
				if ( $order ) {
					$order->update_status( 'wc-completed', $message . '<BR>' );
				}
			}
			
			ob_start();
			wc_get_template( 'shortcode/ywbc-complete-orders.php',
				array(
					'posts' => $items,
				),
				YITH_YWBC_TEMPLATES_DIR,
				YITH_YWBC_TEMPLATES_DIR
			);
			
			$content = ob_get_clean();
			
			
			$result['code']  = 1;
			$result['value'] = $content;
			
			return $result;
		}
		
		/**
		 * Perform a search for a barcode value on specific object type
		 *
		 * @param string $text
		 * @param string $type
		 *
		 * @return array
		 * @author Lorenzo Giuffrida
		 * @since  1.0.0
		 */
		public function barcode_action_search( $text, $type = 'shop_order' ) {
			
			$args = array(
				'posts_per_page' => - 1,
				'post_type'      => $type,
				'post_status'    => 'any',
				'meta_query'     => array(
					array(
						'key'     => YITH_Barcode::YITH_YWBC_META_KEY_BARCODE_DISPLAY_VALUE,
						'value'   => $text,
						'compare' => 'LIKE',
					)
				)
			);
			
			return get_posts( $args );
			
		}
		
		/**
		 * Manage a search for barcode value on orders
		 *
		 * @param array  $result the result for the current action
		 * @param string $text   the text entered by the user
		 *
		 *
		 * @return string
		 * @author Lorenzo Giuffrida
		 * @since  1.0.0
		 */
		public function yith_barcode_action_shop_order_search( $result, $text ) {
			
		}
	}
}

YITH_YWBC_Shortcodes::get_instance();
?>
