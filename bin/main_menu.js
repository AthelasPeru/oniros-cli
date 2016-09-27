var main_menu = module.exports;
var shell = require("shelljs");
var inquirer = require("inquirer");

main_menu.choices = [
	{
		name:"1) Use the build tools",
		value: "build_tools"
	},
	{
		name:"2) Wordpress funtionalities",
		value: "wordpress"
	}	
];

main_menu.display  = inquirer.prompt;