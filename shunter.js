var connect = require('connect');
var serveStatic = require('serve-static');
var featureFlags = require('./feature-flags');

var app = connect();

app.use(featureFlags('flags.json'));
app.use(serveStatic('features', { index: false }));
app.listen(3000);
