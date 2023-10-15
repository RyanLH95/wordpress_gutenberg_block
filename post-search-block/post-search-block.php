<?php
/**
 * Plugin Name:       Post Search Block
 * Description:       Custom Gutenberg Block for search blog posts.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ryan Henry
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       post-search-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_post_search_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}

// this function is for paginating through the results when search
global $wp_query;
$total = $wp_query->max_num_pages;
// only bother with the rest if we have more than 1 page!
if ( $total > 1 ) {
     // get the current page
     if ( !$current_page = get_query_var('paged') )
          $current_page = 1;
     // structure of "format" depends on whether we're using pretty permalinks
     $format = empty( get_option('permalink_structure') ) ? '&page=%#%' : 'page/%#%/';
     echo paginate_links(array(
          'base' => get_pagenum_link(1) . '%_%',
          'format' => $format,
          'current' => $current_page,
          'total' => $total,
          'mid_size' => 4,
          'type' => 'list'
     ));
}

add_action( 'init', 'create_block_post_search_block_block_init' );

add_filter( 'auto_update_plugin', '__return_true' );
