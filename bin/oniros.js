#! /usr/bin/env node
console.log("\n#####################");
console.log("# Welcome to Oniros #");
console.log("#####################\n");





var fs = require('fs');
var Mustache = require("mustache");
var shell = require("shelljs");
var inquirer = require("inquirer");

var cpt = require("./cpt.js");
var build = require("./build.js");
var wp = require("./wordpress.js");
var main_menu = require("./main_menu.js");


// Main Menu

inquirer.prompt([
	{
	    type: 'list',
	    name: 'submenu',
	    message: 'What do you want Oniros to do for you?\n Remeber you should be in the main project folder',
	    choices: main_menu.choices
  	}
]).then(function (answers) {
	// Oniros NPM Scripts
	if(answers.submenu == "build_tools"){
		inquirer.prompt([
			{
			    type: 'list',
			    name: 'script',
			    message: 'Choose your build script',
			    choices: build.choices
		  	}
		]).then(function (answers) {
			shell.exec("npm run " + answers.script); 
		});
	}
	// Wordpress templating
	else if(answers.submenu == "wordpress"){
		inquirer.prompt(
			cpt.questions
		).then(function(answers){
			cpt.basic = answers;
			var template;
			fs.readFile("templates/wordpress/cpt.js", function (err, data) {
			  if (err) throw err;
			  
			  template = Mustache.render(data.toString(), cpt.basic);
			  fs.appendFile("posttypes.php", template, function (err){
					if (err) throw err;
				});

			});		

		});
	}
	 
});




