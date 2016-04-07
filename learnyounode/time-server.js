var net = require('net')
var portNumber = process.argv[2]

function formatDigits(data) {
    return ("0" + data).slice(-2)
}

function now(){
    var date = new Date()
    return date.getFullYear() + "-" + 
           formatDigits(date.getMonth() + 1) + "-" + 
           formatDigits(date.getDate()) + " " + 
           date.getHours() + ":" + 
           date.getMinutes() + "\n"
}

var server = net.createServer(function (socket) {
    socket.end(now())
})

server.listen(portNumber)

