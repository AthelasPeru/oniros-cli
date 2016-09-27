#! /usr/bin/env node
console.log("\n#####################");
console.log("# Welcome to Oniros #");
console.log("#####################\n");


var menu = require("./menu.js");

menu.display([
	{
	    type: 'list',
	    name: 'script',
	    message: 'What do you want Oniros to do for you?',
	    paginated: true,
	    choices: menu.choices
  	},
]).then(function (answers) {
	shell.exec("npm run " + answers.script);  
});



