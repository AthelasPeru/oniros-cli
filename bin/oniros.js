#! /usr/bin/env node
console.log("Welcome to Oniros CLI");

var shell = require("shelljs");
var inquirer = require("inquirer");


var choices = [
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
		name: "7) Zip Theme",
		value: "zip"
	}
];
var input = inquirer.prompt([
	{
	    type: 'list',
	    name: 'script',
	    message: 'What do you want Oniros to do for you?',
	    paginated: true,
	    choices: choices
  },
]).then(function (answers) {
	// console.log(answers);

	shell.exec("npm run " + answers.script);
  //console.log(JSON.stringify(answers, null, '  '));
});
