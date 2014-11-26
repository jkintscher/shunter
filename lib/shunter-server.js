var connect = require('connect');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');
var featureFlags = require('./feature-flags');

module.exports = function(manifest_file, features_path, feature_root, port) {
  var app = connect();

  app.use(cookieParser());
  app.use(featureFlags('../' + manifest_file, feature_root));
  app.use(serveStatic(features_path, { index: false }));
  app.listen(port || 3000);

  return app;
};
