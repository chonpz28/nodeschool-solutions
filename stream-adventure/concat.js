var concat = require('concat-stream');

process.stdin.pipe(concat(function (s) {
    process.stdout.write(s.reverse());
}));
