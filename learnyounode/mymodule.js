var fs = require('fs')
var path = require('path')
var filtered = undefined

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, function (err, list) {
    if (err) {
        return callback(err)
    } else {
        extension = '.' +  extension
        filtered = list.filter(function (file) {
            return path.extname(file) == extension
        })
        return callback(null, filtered)
    }})
}
