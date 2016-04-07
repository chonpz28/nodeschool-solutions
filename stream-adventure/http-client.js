var req = require('request');

process.stdin
    .pipe(req.post('http://localhost:8099'))
    .pipe(process.stdout);
