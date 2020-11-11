const express = require('express')
const app = express()
const port = 3000

app.listen(port, function() {
    console.log('Server listening on port 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/auth', (req, res) => {
    console.log(req)
    res.redirect(__dirname + '/index.html')
})
