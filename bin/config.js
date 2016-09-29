var config = module.exports;

var path = require('path');

config.templates_path = path.resolve(__dirname,"../templates/wordpress/");
config.cpt_template = "/cpt.js";

config.cpt_dist = path.resolve(process.cwd(),"includes/functions/posttypes.php");