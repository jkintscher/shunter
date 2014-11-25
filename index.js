var shunter = require('./lib/shunter-server');

var MANIFEST_FILE      = 'config/flags.json';
var FEATURES_DIRECTORY = 'features';
var CONNECT_PORT       = 3000;

shunter(MANIFEST_FILE, FEATURES_DIRECTORY, CONNECT_PORT);
