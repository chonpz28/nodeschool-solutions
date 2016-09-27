var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

process.stdin.pipe(tr);

var loud = tr.select('.loud').createStream();

loud.pipe(through(write, end)).pipe(loud);
tr.pipe(process.stdout);

function write (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}

function end (done) { done(); }
