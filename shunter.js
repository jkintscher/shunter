var connect = require('connect');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');
var featureFlags = require('./feature-flags');

var app = connect();

app.use(cookieParser());
app.use(featureFlags('flags.json'));
app.use(serveStatic('features', { index: false }));
app.listen(3000);
