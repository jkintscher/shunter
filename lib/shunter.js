var connect = require('connect');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');
var featureFlags = require('./feature-flags');

module.exports = function(manifest_file, features_dir, port) {
  var app = connect();

  app.use(cookieParser());
  app.use(featureFlags('../' + manifest_file));
  app.use(serveStatic(features_dir, { index: false }));
  app.listen(port || 3000);

  return app;
};
