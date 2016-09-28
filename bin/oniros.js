#! /usr/bin/env node
console.log("\n#####################");
console.log("# Welcome to Oniros #");
console.log("#####################\n");



var shell = require("shelljs");
var build = require("./build.js");
var wp = require("./wordpress.js");
var main_menu = require("./main_menu.js");

var fs = require('fs');
var Mustache = require("mustache");

var cpt = require("./cpt.js");



// Main Menu

main_menu.display([
	{
	    type: 'list',
	    name: 'submenu',
	    message: 'What do you want Oniros to do for you?\n Remeber you should be in the main project folder',
	    choices: main_menu.choices
  	}
]).then(function (answers) {
	// Oniros NPM Scripts
	if(answers.submenu == "build_tools"){
		build.display([
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
		cpt.display(
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




