var mymodule = require('./mymodule.js')
var dir = process.argv[2]
var filter = process.argv[3]

mymodule(dir, filter, function(err, list) {
    if (err) {
        throw err
    } else {
        list.forEach(function (file) {
            console.log(file);
        })
    }

})
