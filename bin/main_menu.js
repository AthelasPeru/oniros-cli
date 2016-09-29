var main_menu = module.exports;
var shell = require("shelljs");


main_menu.choices = [
	{
		name:"1) Use the build tools",
		value: "build_tools"
	},
	{
		name:"2) Create WP Custom Post Type",
		value: "cpt"
	}	
];

main_menu.questions = [
	{
	    type: 'list',
	    name: 'submenu',
	    message: 'What do you want Oniros to do for you?\n Remeber you should be in the main project folder',
	    choices: main_menu.choices
  	}
];

