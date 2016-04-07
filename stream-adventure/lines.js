var through = require('through2');
var split = require('split');

var lineCount = 1;
var stream = through(write, end);

function write(line, encoding, next) {
    this.push(lineCount % 2 === 0
        ? line.toString().toUpperCase() + '\n'
        : line.toString().toLowerCase() + '\n'
    );
    lineCount ++;
    next();
}

function end(done) {
    done();
}

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout);
