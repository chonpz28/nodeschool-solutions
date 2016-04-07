var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var extension = '.' +  process.argv[3]
var filtered = undefined

fs.readdir(dir, function (err, list) {
    filtered = list.filter(function (file) {
        return path.extname(file) == extension
    })
    for(var i in filtered) {
        console.log(filtered[i])
    }
})

//    var fs = require('fs')
//    var path = require('path')
//    
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })

