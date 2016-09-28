var cpt = module.exports;

var shell = require("shelljs");
var inquirer = require("inquirer");

cpt.support = [
	{
		name:"Title",
		value: "title"
	},
	{
		name:"Editor (content)",
		value: "editor"
	},
	{
		name:"Author",
		value: "author"
	},
	{
		name:"Thumbnail (featured image, Oniros supports Thumbnails by default)",
		value: "thumbnail"
	},
	{
		name:"Excerpt",
		value: "excerpt"
	},
	{
		name:"Trackbacks",
		value: "trackbacks"
	},
	{
		name:"Custom Fields (WP Built-in field)",
		value: "custom-fields"
	},
	{
		name:"Comments",
		value: "comments"
	},
	{
		name:"Revisions (Post handles different versions)",
		value: "revisions"
	},
	{
		name:"Page Atrributes (menu order, hierarchical must be true to show Parent option)",
		value: "page-attributes"
	},
	{
		name:"Post Formats (WP new Post Formats, currently unsupported by Oniros)",
		value: "post-formats"
	},
];

cpt.options = [
	{
		name:"Public",
		value: "public",
		default: true
	},
	{
		name:"Exclude from search",
		value: "exclude_from_search",
		default: false
	},
	{
		name:"Show in Admin Menu",
		value: "show_in_menu",
		default: true
	},
	{
		name:"Show in Nav Menus (Avaliable to show on the menu builder)",
		value: "show_in_nav_menus",
		default: false
	},
	{
		name:"Capability type: Post or Page",
		value: "capability_type",
		default: "post"
	},
];

cpt.questions = [
	{
	    type: 'input',
	    name: 'cpt_name',
	    message: 'Name for your Custom Post Type?',
	    validate: function(input){
	    	if(["post", "page","attachment", "revision","nav_menu_item","action","author","order","theme"].indexOf(input.toLowerCase()) === -1 && input.indexOf(" ") === -1){
	    		return true
	    	} else {
	    		return "The selected post name: ["+ input +"] is reserved by wordpress or you used an invalid character. You should only use letters."
	    	}
	    }
	   
	    
  	},
  	{
	    type: 'input',
	    name: 'singular',
	    message: 'Singular of your CPT',
	    
	    default: function(answers){
	    	return answers.cpt_name
	    }
	    
  	},
  	{
	    type: 'input',
	    name: 'plural',
	    message: 'Plural for your CPT',
	    default: function(answers){
	    	return answers.cpt_name + "s"
	    },
	    
	    
  	},
  	{
	    type: 'input',
	    name: 'slug',
	    message: 'slug for your CPT',
	    default: function(answers){
	    	return answers.plural.toLowerCase()
	    }
	    
	   
	    
  	},
  	{
	    type: 'checkbox',
	    name: 'supports',
	    message: 'Suport capabilities? Use space to select',
	    paginated: true,
	    choices: cpt.support
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

