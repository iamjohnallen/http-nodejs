// A basic web server in node.js

var express = require('express')
var app = express()
app.use(express.static(__dirname))

// Example of a custom url
// Sends OK to browser on /status url
app.get('/status', (req, res) => {
	res.send("OK")
})


// Listening on port 3000
app.listen(3000, () => {
    console.log('server is listening mutha fucka')
})

