var http = require('http');
var tr = require('through2');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(tr(write, end)).pipe(res);
    } else {
        res.end('Send a POST method\n');
    }
});
server.listen(parseInt(process.argv[2]));

function write (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}

function end (done) {
    done();
}
