
add_action( 'init', 'athelas_register_{{cpt_name}}' );
function athelas_register_{{cpt_name}}() {
	$labels = array(
		"name" => "{{plural}}",
		"singular_name" => "{{singular}}",
		"menu_name" => "{{plural}}",
		"all_items" => "todas las {{plural}}",
		"add_new" => "agregar nueva {{singular}}",
		"add_new_item" => "agregar nueva {{singular}}",
		"edit" => "Editar",
		"edit_item" => "Editar {{singular}}",
		"new_item" => "Nueva {{singular}}",
		"view" => "ver",
		"view_item" => "ver {{singular}}",
		"search_items" => "Buscar {{plural}}",
		"not_found" => "{{plural}} no encontradas",
		"not_found_in_trash" => "{{plural}} no encontradas en la papelera",
		);

	$args = array(
		"labels" => $labels,
		"description" => "Post type {{plural}}",
		'taxonomies' => array(),
		"public" => true,
		"show_ui" => true,
		"has_archive" => true,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "{{slug}}", "with_front" => true ),
		"query_var" => true,
		"supports" => array({{supports}}),	
	);
	register_post_type( "{{cpt_name}}", $args );

}// End of athelas_register_{{cpt_name}}()
