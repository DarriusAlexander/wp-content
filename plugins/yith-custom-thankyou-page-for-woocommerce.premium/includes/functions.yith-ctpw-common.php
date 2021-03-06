<?php
/*
 * This file belongs to the YIT Framework.
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

if ( ! function_exists( 'yith_ctpw_list_all_pages' ) ) {

    /**
     * list all wordpress pages
     *
     * @author Armando Liccardo <armando.liccardo@yithemes.com>
     * @since  1.0.0
     *
     * @param void
     *
     * @return array ( ID => Page_title )
     */
    function yith_ctpw_list_all_pages() {
        $args = array(
            'sort_order' => 'asc',
            'sort_column' => 'post_title',
            'hierarchical' => 1,
            'exclude' => '',
            'include' => '',
            'meta_key' => '',
            'meta_value' => '',
            'authors' => '',
            'child_of' => 0,
            'parent' => -1,
            'exclude_tree' => '',
            'number' => '',
            'offset' => 0,
            'post_type' => 'page',
            'post_status' => 'publish'
        );
        $pages = get_pages($args);
        $l_pages = array();
        foreach ( $pages as $page ) {
            $l_pages[ $page->ID ] = $page->post_title;
        }
        return $l_pages;
    }
}

/* add an edit link on Selected Thank you page on admin side */
add_action('wp_ajax_yith_ctpw_get_edit_page_url', 'yith_ctpw_get_edit_page_url');
function yith_ctpw_get_edit_page_url() {
    $result = false;
    if ( isset( $_POST['ctpw_id'])) {
        if ( $_POST['ctpw_id'] != '' && $_POST['ctpw_id'] != 0 ) {
            $result =  get_edit_post_link($_POST['ctpw_id']);
        }
    }
    echo $result;
    wp_die();
}
