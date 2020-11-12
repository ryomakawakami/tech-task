const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./Users');

const app = express();
const PORT = process.env.PORT || 3000;

// Starts server and prints console message
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Allows for easy decoding of req
app.use(bodyParser.urlencoded({extended: false}));

app.post('/auth', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    // Handle login logic
    switch (login(username, password)) {
        case 0:
            res.write('<link rel="stylesheet" type="text/css" href="css/style.css">');
            res.write('<p>Hello ' + username + '</p>');
            res.end('<a href="/">Logout</a>');
            break;
        case 1:
            res.write('<link rel="stylesheet" type="text/css" href="css/style.css">');
            res.write('<p>Wrong password</p>');
            res.end('<a href="/">Go back</a>');
            break;
        case 2:
            res.write('<link rel="stylesheet" type="text/css" href="css/style.css">');
            res.write('<p>User doesn\'t exist</p>');
            res.end('<a href="/">Go back</a>');
            break;
    }
});

// 0: success, 1: wrong password, 2: user doesn't exist
function login(username, password) {
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
