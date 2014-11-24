var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('releases', { index: false }));
app.listen(3000);
