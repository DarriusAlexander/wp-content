<?php
/**
 * @package Blox Page Builder
 * @author UniteCMS.net
 * @copyright (C) 2017 Unite CMS, All Rights Reserved. 
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 * */
defined('_JEXEC') or die('Restricted access');


/*
 * This file is part of Twig.
 *
 * (c) 2010 Fabien Potencier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Marks a content as safe.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 */
class Twig_Markup implements Countable
{
    protected $content;
    protected $charset;

    public function __construct($content, $charset)
    {
        $this->content = (string) $content;
        $this->charset = $charset;
    }

    public function __toString()
    {
        return $this->content;
    }

    public function count()
    {
        return function_exists('mb_get_info') ? mb_strlen($this->content, $this->charset) : strlen($this->content);
    }
}
