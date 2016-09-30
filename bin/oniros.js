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
function createSinglePage(answers){
	var single_template;
	fs.readFile(config.templates_path + config.single_template, 'UTF-8', function (err, data) {
	  if (err) throw err;
	  
	  single_template = Mustache.render(data.toString(), answers);
	  fs.writeFile(path.resolve(config.project_root,"single-" + answers.cpt_name + ".php") , single_template, function (err){
			if (err) throw err;
		});
	});	
}

// Functions
function createArchivePage(answers){
	var archive_template;
	fs.readFile(config.templates_path + config.archive_template, 'UTF-8', function (err, data) {
	  if (err) throw err;
	  
	  archive_template = Mustache.render(data.toString(), answers);
	  fs.writeFile(path.resolve(config.project_root,"archive-" + answers.cpt_name + ".php") , archive_template, function (err){
			if (err) throw err;
		});
	});		
}

function createCPT(answers){
	var cpt_template;
	fs.readFile(config.templates_path + config.cpt_template, 'UTF-8', function (err, data) {
	  if (err) throw err;
	  
	  cpt_template = Mustache.render(data.toString(), answers);
	  fs.appendFile(config.cpt_dist, cpt_template, function (err){
			if (err) throw err;
		});
	});		
}

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
							createSinglePage(cpt.answers);
					}					
					if(cpt.answers.has_archive){
						createArchivePage(answers);
					}
					createCPT(answers);

				});
			}
		});
		
	}
	 
});




