var menu = module.exports;

var shell = require("shelljs");
var inquirer = require("inquirer");

menu.choices = [
	{
		name:"1) Watch Main",
		value: "watch:main"
	},
	{
		name:"2) Watch All",
		value: "watch:all"
	},
	{
		name:"3) Build Main",
		value: "build:main:all"
	},
	{
		name: "4) Build All",
		value: "build:all"
	},
	{
		name: "5) Process Favicon",
		value: "favicon"
	},
	{
		name: "6) Minimize Images",
		value: "imagemin"
	},
	{
		name: "7) Build Login CSS",
		value: "login:build:css"
	},
	{
		name: "8) Zip Theme",
		value: "zip"
	}
];

menu.display  = inquirer.prompt;

