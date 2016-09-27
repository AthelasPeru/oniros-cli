#! /usr/bin/env node
console.log("\n#####################");
console.log("# Welcome to Oniros #");
console.log("#####################\n");


var shell = require("shelljs");
var build = require("./build.js");
var wp = require("./wordpress.js");
var main_menu = require("./main_menu.js");

main_menu.display([
	{
	    type: 'list',
	    name: 'submenu',
	    message: 'What do you want Oniros to do for you?\n Remeber you should be in the main project folder',
	    paginated: true,
	    choices: main_menu.choices
  	}
]).then(function (answers) {
	console.log(answers);
	if(answers.submenu == "build_tools"){
		build.display([
			{
			    type: 'list',
			    name: 'script',
			    message: 'Choose your build script',
			    paginated: true,
			    choices: build.choices
		  	}
		]).then(function (answers) {
			shell.exec("npm run " + answers.script); 
		});
	}
	else if(answers.submenu == "wordpress"){
		console.log("Wordpressss");
		wp.display([
			{
			    type: 'list',
			    name: 'action',
			    message: 'Build new WP CPT',
			    paginated: true,
			    choices: wp.choices
		  	}
		]).then(function (answers) {
			shell.exec("echo Here should come woordpess actions" + answers.action); 
		});
	}
	 
});



