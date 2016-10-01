function athelas_themes_taxonomy() {

	// taxonomy for Products
	$labels = array(
        'name' => _x( '{{singular}} Types', 'taxonomy general name' ),
        'singular_name' => _x( '{{singular}} Type', 'taxonomy singular name' ),
        'search_items' => __( 'Search {{plural}} Types' ),
        'all_items' => __( 'All {{plural}} Types' ),
        'parent_item' => __( 'Parent {{singular}} Type' ),
        'parent_item_colon' => __( 'Parent {{singular}} Type:' ),
        'edit_item' => __( 'Edit {{singular}} Type' ),
        'update_item' => __( 'Update {{singular}} Type' ),
        'add_new_item' => __( 'Add New {{singular}} Type' ),
        'new_item_name' => __( 'New {{singular}} Type Name' ),
        'menu_name' => __( '{{singular}} Type' ),
 	);
	register_taxonomy(
		'{{tax_name}}',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
		array(
			{{#object_type}}
					'{{.}}',
			{{/object_type}}),   		 //post type name
		array(
			'hierarchical' 		=> {{hierarchical}},
			'description'		=> {{description}},
			'public'			=> {{public}},
			'publicly_queryable'=> {{publicly_queryable}},
			'labels' 			=> $labels,  //Display name
			'query_var' 		=> {{query_var}},
			'show_ui' 			=> {{show_ui}},
        	'show_admin_column' => {{show_admin_column}},
        	'show_in_nav_menus' => {{show_in_nav_menus}},
			'rewrite'			=> array(
					'slug' 			=> '{{slug}}', // This controls the base slug that will display before each term
					'with_front' 	=> false // Don't display the category base before
					)
			)
		);
}
add_action( 'init', 'athelas_themes_taxonomy');