var taxonomy = module.exports;

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");

var config = require("../config.js");

taxonomy.createTaxonomy = function(answers){

}

taxonomy.createTaxonomyArchivePage = function(answers){

}

taxonomy.createTaxonomySinglePage = function(answers){

}

taxonomy.questions = [
		{
		    type: 'input',
		    name: 'tax_name',
		    message: 'Name for your Custom Post Type (should be lowercase)?',
		    validate: function(input){
		    	if(inpu.length < 32 && input.indexOf(" ") === -1){
		    		return true
		    	} else {
		    		return "Max lenght exceeded or invalid characters used"
		    	}
		    }		    
	  	},
];