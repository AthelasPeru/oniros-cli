var cpt = module.exports;

var shell = require("shelljs");
var inquirer = require("inquirer");

cpt.support = [
	{
		name:"Thumbnail",
		value: "thumbnail"
	},
	{
		name:"Excerpt",
		value: "excerpt"
	},
	{
		name:"Comments",
		value: "comments"
	},
	{
		name:"Title",
		value: "title"
	},
];

cpt.options = [
	{
		name:"Public",
		value: "public"
	},
	{
		name:"Show in UI",
		value: "show_ui"
	}
];

cpt.questions = [
	{
	    type: 'input',
	    name: 'cpt_name',
	    message: 'Name for your Custom Post Type?',
	    paginated: true,
	    
  	},
  	{
	    type: 'input',
	    name: 'singular',
	    message: 'Singular of your CPT',
	    paginated: true,
	    
  	},
  	{
	    type: 'input',
	    name: 'plural',
	    message: 'Plural for your CPT',
	    paginated: true,
	    
  	},
  	{
	    type: 'input',
	    name: 'slug',
	    message: 'slug for your CPT',
	    paginated: true,
	    
  	},
  	{
	    type: 'checkbox',
	    name: 'supports',
	    message: 'Suport capabilities? Use space to select',
	    paginated: true,
	    choices: cpt.support
  	},
];

cpt.display  = inquirer.prompt;

