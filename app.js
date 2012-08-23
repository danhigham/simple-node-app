var http = require('http');
var util = require('util');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(util.inspect(req.headers));

}).listen(process.env.VMC_APP_PORT || 3000);
