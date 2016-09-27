#! /usr/bin/env node
console.log("\n#####################");
console.log("# Welcome to Oniros #");
console.log("#####################\n");

var fs = require('fs');
var Mustache = require("mustache");
var menu = require("./menu.js");
var cpt = require("./cpt.js");


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

/*
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
*/



