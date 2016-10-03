var taxonomy = module.exports;

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");

var config = require("../config.js");
var cache = require("./cache.js");

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

taxonomy.createTaxonomy = function(answers){
	var template;
	fs.readFile(config.templates_path + config.tax_template, 'UTF-8', function (err, data) {
			if (err) throw err;

		template = Mustache.render(data.toString(), answers);
		fs.appendFile(config.taxonomy_dist, template, function (err){
			if (err) throw err;
		});
	});
}

taxonomy.createTaxonomyArchivePage = function(answers){

}

taxonomy.createTaxonomySinglePage = function(answers){

}

taxonomy.createQuestions = function(){
	taxonomy.object_type = [
		{
			name:"post",
			value: "post"
		},
		{
			name:"page",
			value: "page"
		},
		{
			name:"attachment",
			value: "attachment"
		},
		{
			name:"revision",
			value: "revision"
		},
		{
			name:"nav_menu_item",
			value: "nav_menu_item"
		},
	];

	var cpts = cache.getCPTs();
	

	for (var i = 0; i < cpts.length; i++) {
		taxonomy.object_type.push(
			{
				name: cpts[i].name,
				value: cpts[i].name
			}
		);
	}

	taxonomy.questions = [
			{
			    type: 'input',
			    name: 'tax_name',
			    message: 'Name for your Taxonomy (should be lowercase)?',
			    validate: function(input){
			    	if(input.length < 32 && input.indexOf(" ") === -1){
			    		return true
			    	} else {
			    		return "Name should only contain lowercase letters and the underscore character, and not be more than 32 characters long (database structure restriction)."
			    	}
			    }		    
		  	},
	  	  	{
	  		    type: 'input',
	  		    name: 'singular',
	  		    message: 'Singular of your Taxonomy',
	  		    
	  		    default: function(answers){
	  		    	return answers.tax_name.capitalize()
	  		    }
	  		    
	  	  	},
	  	  	{
	  		    type: 'input',
	  		    name: 'plural',
	  		    message: 'Plural for your Taxonomy',
	  		    default: function(answers){
	  		    	return answers.tax_name.capitalize() + "s"
	  		    },
	  		    
	  		    
	  	  	},
	  	  	{
	  		    type: 'input',
	  		    name: 'slug',
	  		    message: 'slug for your Taxonomy',
	  		    default: function(answers){
	  		    	return answers.plural.toLowerCase()
	  		    }	    
	  	  	},
	  	  	{
	  		    type: 'checkbox',
	  		    name: 'obect_type',
	  		    message: 'Select posttypes to append the taxonomy to',
	  		    choices: taxonomy.object_type
	  	  	},

	];
	return taxonomy.questions;
}

