const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./Users');
const loginHTML = require('./LoginHTML');
const app = express();
const PORT = process.env.PORT || 3000;

// Starts server and prints console message
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Allows for easy decoding of req
app.use(bodyParser.urlencoded({extended: false}));

// Middleware
app.use((req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
});

/*
 * Rount Handling
 */
app.get('/homepage', (req, res) => res.redirect('/'));

app.get('/example', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'example.html'))
});

app.post('/auth', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    // Handle login logic
    res.write(loginHTML.header);
    switch (login(username, password)) {
        case 0:
            res.write('<p>Hello ' + username + '</p>');
            res.write(loginHTML.button('Logout'));
            break;
        case 1:
            res.write('<p>Wrong password</p>');
            res.write(loginHTML.button('Go Back'));
            break;
        case 2:
            res.write('<p>User doesn\'t exist</p>');
            res.write(loginHTML.button('Go Back'));
            break;
    }
    res.end(loginHTML.footer);
});

/*
 * Helper Functions
 */

// 0: success, 1: wrong password, 2: user doesn't exist
function login(username, password) {
    for (user of users) {
        if (username === user.username) {
            if (password === user.password) {
                return 0;
            } else {
                return 1;
            }
        }
    }
    return 2;
}
