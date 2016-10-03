#! /usr/bin/env node
console.log("\n#####################");
console.log("# Welcome to Oniros #");
console.log("#####################\n");

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");
var shell = require("shelljs");
var inquirer = require("inquirer");
var ui = new inquirer.ui.BottomBar();

var config = require("../config.js");
var cpt = require("../modules/cpt.js");
var taxonomy = require("../modules/taxonomy.js");
var build = require("../modules/build_npm_scripts.js");
var wp = require("../modules/wordpress_menu.js");
var main_menu = require("../modules/main_menu.js");
var page = require("../modules/page.js");
var cache = require("../modules/cache.js");




// Functions


inquirer.prompt(main_menu.questions).then(function (answers) {
	
	cache.createCacheFileIfNotExists();
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
					if(answers.create_single){
							cpt.createCPTSinglePage(answers);
					}					
					if(answers.has_archive){
						cpt.createCPTArchivePage(answers);
					}
					cpt.createCPT(answers);
					cache.addCPT(answers);

				});
			}
			else if (answers.submenu == "create_page_template"){
				inquirer.prompt(page.questions).then(function(answers){
					page.createTemplatePage(answers);
					cache.addPage(answers);
				});
			}
			else if (answers.submenu == "create_taxonomy"){
				console.log(cache.getCPTs());
				console.log(taxonomy.createQuestions());
				inquirer.prompt(taxonomy.createQuestions()).then(function(answers){
					taxonomy.createTaxonomy(answers);
				});
			}

			
		});
		
	} 	
	 
});




