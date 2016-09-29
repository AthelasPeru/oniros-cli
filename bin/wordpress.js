var wp = module.exports;
var shell = require("shelljs");


wp.choices = [
	{
		name:"1) Create Custom Post Type",
		value: "create_cpt"
	},
	{
		name:"2) Create Page Template",
		value: "create_page_template"
	},
	{
		name:"3) Create Custom Taxonomy",
		value: "create_taxonomy"
	},
	{
		name:"4) Create Custom Single",
		value: "create_custom_single"
	},
	{
		name:"5) Create Custom Archive",
		value: "create_custom_archive"
	}
];

wp.questions = [
		{
		    type: 'list',
		    name: 'submenu',
		    message: 'What do you want to build for WP',
		    choices: wp.choices
	  	}
]
