var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxy();

var options = {
'App1': 'http://192.168.43.113:5000',
'App2': 'http://192.168.43.113:5050'
}

require('http').createServer(function(req, res) {
proxy.web(req, res, {
target: options[req.headers.host]
});
}).listen(80);
