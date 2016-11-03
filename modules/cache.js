var cache = module.exports;


var fs = require('fs');
var path = require('path');
var beautify = require('js-beautify').js_beautify;

var config = require("../config.js");

cache.createCacheFileIfNotExists = function(){

	fs.access(config.cache_file, fs.constants.F_OK ,  function(err){
		if(err){
			fs.writeFile(config.cache_file , beautify(JSON.stringify(config.cache_struct), {indent_size:4}), function (err){
				if (err) throw err;
			});
		}		
	});		 
}

cache.updatePages = function(){

	try{

		var cache_data = JSON.parse(fs.readFileSync(config.cache_file, 'UTF-8'));
	}
	catch(e){
		console.log("oniros.json file not found. generating one");
	}
	

	for(var i = 0; i < cache_data.pages.length; i++){

		var file = config.project_root + "/" + cache_data.pages[i].template;				
		console.log(file);
		
		try{
			fs.accessSync(file, fs.constants.F_OK);
			console.log("exists");
			console.log(file);
		}
		catch(e){
			// if file doesn't exists, remove it from the
			// object and update file				
			
			cache_data.pages.splice(i , 1);	
			console.log("catched");
			console.log(cache_data);				
			fs.writeFileSync(config.cache_file , beautify(JSON.stringify(cache_data), {indent_size:4}));
		}	
		
	}
}

cache.updatePostTypes = function(){
	try{

		var cache_data = JSON.parse(fs.readFileSync(config.cache_file, 'UTF-8'));
	}
	catch(e){
		console.log("oniros.json file not found. generating one");
	}
	// parse file CPTs

	// compare to content of the includes/functions/posttypes.php file

	// if not in file, delete from cache
};

cache.updateTaxonomies = function(){
	try{

		var cache_data = JSON.parse(fs.readFileSync(config.cache_file, 'UTF-8'));
	}
	catch(e){
		console.log("oniros.json file not found. generating one");
	}
	// parse file CPTs

	// compare to content of the includes/functions/posttypes.php file

	// if not in file, delete from cache
};

cache.update = function(){
	cache.updatePages();
	// cache.updatePostTypes();
	// cache.updateTaxonomies();
}

cache.addTaxonomy = function(answers){
	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		var cache = JSON.parse(data);		
		cache.taxonomies.push({
			name:answers.tax_name,
			slug: answers.slug,
			post_types: answers.object_type
		});
		fs.writeFile(config.cache_file , beautify(JSON.stringify(cache), {indent_size:4}), function (err){
			if (err) throw err;
		});

	});
}

cache.addPage = function(answers){

	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		var cache = JSON.parse(data);
		var name = answers.page_name.toLowerCase();
		cache.pages.push({
			name:name,
			template: "page-" + name + ".php"
		});
		fs.writeFile(config.cache_file , beautify(JSON.stringify(cache), {indent_size:4}), function (err){
			if (err) throw err;
		});

	});
}

cache.addCPT = function(answers){
	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		var cache = JSON.parse(data);		
		cache.cpts.push({
			name:answers.cpt_name,
			slug: answers.slug
		});
		fs.writeFile(config.cache_file , beautify(JSON.stringify(cache), {indent_size:4}), function (err){
			if (err) throw err;
		});

	});
}

cache.getAllData = function(){
    var toReturnData;
    toReturnData =  fs.readFileSync(config.cache_file, 'UTF-8');
   
    return JSON.parse(toReturnData);
}

cache.getCPTData = function(){
    var toReturnData;
    toReturnData =  fs.readFileSync(config.cache_file, 'UTF-8');
       
    return JSON.parse(toReturnData).cpts;
}
