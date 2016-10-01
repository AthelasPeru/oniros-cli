var cache = module.exports;


var fs = require('fs');
var path = require('path');

var config = require("../config.js");

cache.createCacheFileIfNotExists = function(){

	fs.access(config.cache_file, fs.constants.F_OK ,  function(err){
		console.log("route: " + config.cache_file);
		if(err){
			fs.writeFile(config.cache_file , JSON.stringify(config.cache_struct), function (err){
				if (err) throw err;
			});
		}
		else{
			console.log("nada de nada");
		}
	});		 
}


cache.addTaxonomy = function(data){

}

cache.addPage = function(answers){

	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		var cache = JSON.parse(data);
		cache.pages.push({
			name:answers.page_name.toLowerCase()
		});
		fs.writeFile(config.cache_file , JSON.stringify(cache), function (err){
			if (err) throw err;
		});

	});
}

cache.addCPT = function(data){

}

cache.getAllData = function(){
	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		return JSON.parse(data);
	});
}