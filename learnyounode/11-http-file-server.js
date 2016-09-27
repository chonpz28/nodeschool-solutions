var http = require('http')
var fs = require('fs')

var portNumber = process.argv[2]
var file = process.argv[3]

var server = http.createServer(function (request, response) {
    var data = fs.createReadStream(file)
    response.writeHead(200, { 'content-type': 'text/plain' })
    data.pipe(response)
})

server.listen(portNumber)

