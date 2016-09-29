#! /usr/bin/env node
console.log("\n#####################");
console.log("# Welcome to Oniros #");
console.log("#####################\n");

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");
var shell = require("shelljs");
var inquirer = require("inquirer");

var config = require("./config.js");
var cpt = require("./cpt.js");
var build = require("./build_npm_scripts.js");
var wp = require("./wordpress.js");
var main_menu = require("./main_menu.js");


// Main Menu

inquirer.prompt(main_menu.questions).then(function (answers) {
	// Oniros NPM Scripts
	if(answers.submenu == "build_tools"){
		inquirer.prompt(build.questions).then(function (answers) {
			shell.exec("npm run " + answers.script); 
		});
	}
	// Wordpress templating
	else if(answers.submenu == "wordpress"){
		inquirer.prompt(wp.questions).then(function(answers){
			if(answers.submenu =="create_cpt"){
				inquirer.prompt(
					cpt.questions
				).then(function(answers){
					cpt.answers = answers;
					
					if(cpt.answers.create_single){
						var single_template;
					}
					
					if(cpt.answers.has_archive){
						var archive_template;
					}
					var cpt_template;
					fs.readFile(config.templates_path + config.cpt_template, 'UTF-8', function (err, data) {
					  if (err) throw err;
					  
					  cpt_template = Mustache.render(data.toString(), cpt.answers);
					  fs.appendFile(config.cpt_dist, cpt_template, function (err){
							if (err) throw err;
						});
					});		

				});
			}
		});
		
	}
	 
});




