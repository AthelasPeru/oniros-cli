<?php 

add_action( 'init', 'athelas_register_Game' );
function athelas_register_Game() {
	$labels = array(
		"name" => "Games",
		"singular_name" => "Game",
		"menu_name" => "Games",
		"all_items" => "todas las Games",
		"add_new" => "agregar nueva Game",
		"add_new_item" => "agregar nueva Game",
		"edit" => "Editar",
		"edit_item" => "Editar Game",
		"new_item" => "Nueva Game",
		"view" => "ver",
		"view_item" => "ver Game",
		"search_items" => "Buscar Games",
		"not_found" => "Games no encontradas",
		"not_found_in_trash" => "Games no encontradas en la papelera",
		);

	$args = array(
		"labels" => $labels,
		"description" => "Post type Games",
		'taxonomies' => array(),
		"public" => true,
		"show_ui" => true,
		"has_archive" => true,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "game", "with_front" => true ),
		"query_var" => true,
		"supports" => array(thumbnail,excerpt),	
	);
	register_post_type( "Game", $args );

}// End of athelas_register_Game()
