<?php
/**
 * Plugin Name: Custom Block Template
 * Description: A template for custom WordPress blocks with various controls.
 * Version: 1.0.0
 * Author: Your Name
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Define plugin version
define( 'CUSTOM_BLOCK_VERSION', '1.0.0' );

// Function to register the block and enqueue scripts/styles
function custom_block_template_register_block() {
	// Register the block's JavaScript file
	wp_register_script(
		'custom-block-template-script',
		plugins_url( 'block/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
		CUSTOM_BLOCK_VERSION,
		true
	);

	// Register the block's editor styles
	wp_register_style(
		'custom-block-template-editor-style',
		plugins_url( 'block/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		CUSTOM_BLOCK_VERSION
	);

	// Register the block's frontend styles
	wp_register_style(
		'custom-block-template-frontend-style',
		plugins_url( 'block/style.css', __FILE__ ),
		array(),
		CUSTOM_BLOCK_VERSION
	);

	// Register the block type with the scripts and styles
	register_block_type(
		'custom/block-template',
		array(
			'editor_script_handles' => array( 'custom-block-template-script' ),
			'editor_style_handles'  => array( 'custom-block-template-editor-style' ),
			'view_script_handles'   => array( 'custom-block-template-frontend-style' ),
		)
	);
}
add_action( 'init', 'custom_block_template_register_block' );
