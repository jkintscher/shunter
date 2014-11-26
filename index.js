var shunter = require('./lib/shunter-server');

var MANIFEST_FILE = 'config/flags.json';
var FEATURES_PATH = 'features';
var FEATURE_ROOT  = 'current';
var CONNECT_PORT  = 3000;

shunter(MANIFEST_FILE, FEATURES_PATH, FEATURE_ROOT, CONNECT_PORT);
