var port = process.env.PORT || 3000,
    http = require('http'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    fs = require('fs');

var log = function(entry) {
    fs.appendFileSync('/tmp/wedding-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on http://localhost:' + port + '/');
});
