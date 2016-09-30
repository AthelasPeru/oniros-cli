var config = module.exports;

var path = require('path');

// Templates folder
config.templates_path = path.resolve(__dirname,"../templates/wordpress/");
config.project_root = path.resolve(process.cwd(), "");

// CPT
config.cpt_template = "/cpt.js";
config.cpt_dist = path.resolve(process.cwd(),"includes/functions/posttypes.php");

// Page Template
config.page_template = "/page-custom.js";

// Single CPT
config.single_template = "/single-cpt.js";

// Archive
config.archive_template = "/archive-cpt.js";

// Taxonomy
config.tax_template = "/taxonomy.js";