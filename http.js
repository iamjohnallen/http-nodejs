// A basic web server in node.js

var express = require('express')
var app = express()
app.use(express.static(__dirname))

// Listening on port 3000
app.listen(3000, () => {
    console.log('server is listening mutha fucka')
})

