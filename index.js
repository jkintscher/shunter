var shunter = require('./lib/shunter-server');
var config = require('./config/shunter');

shunter(config.manifest_file,
        config.features_path,
        config.feature_root,
        config.port
);
