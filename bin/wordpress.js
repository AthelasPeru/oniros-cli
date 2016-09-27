var wp = module.exports;
var shell = require("shelljs");
var inquirer = require("inquirer");

wp.choices = [
	{
		name:"1) Create CTP",
		value: "watch:main"
	},
	{
		name:"2) Create imagesize",
		value: "watch:all"
	}
];

wp.display  = inquirer.prompt;