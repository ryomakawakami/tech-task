const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log('Server listening on port 3000'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/redirect', (req, res) => {
    res.redirect('/');
})

app.post('/auth', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    // Handle login logic
    switch (login(username, password)) {
        case 0:
            res.write('<link rel="stylesheet" type="text/css" href="style.css">')
            res.write('<p>Hello ' + username + '</p>')
            res.end('<a href="/">Logout</a>')
            break;
        case 1:
            res.write('<link rel="stylesheet" type="text/css" href="style.css">')
            res.write('<p>Wrong password</p>')
            res.end('<a href="/">Go back</a>')
            break;
        case 2:
            res.write('<link rel="stylesheet" type="text/css" href="style.css">')
            res.write('<p>User doesn\'t exist</p>')
            res.end('<a href="/">Go back</a>')
            break;
    }
})

// 0: success, 1: wrong password, 2: user doesn't exist
function login(username, password) {
    var users = {
        'oh': 'io',
        'marco': 'polo',
        'hello': 'world'
    }

    if (username in users) {
        if (users[username] == password) {
            return 0;
        } else {
            return 1;
        }
    } else {
        return 2;
    }
}
