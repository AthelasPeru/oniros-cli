var wp = module.exports;
var shell = require("shelljs");


wp.choices = [
	{
		name:"1) Create Custom Post Type (you can also choose to create it's single and archive pages",
		value: "create_cpt"
	},
	{
		name:"2) Create Page Template",
		value: "create_page_template"
	},
	// {
	// 	name:"3) Create Custom Taxonomy",
	// 	value: "create_taxonomy"
	// }
	
];

wp.questions = [
		{
		    type: 'list',
		    name: 'submenu',
		    message: 'What do you want to build for WP',
		    choices: wp.choices
	  	}
]
