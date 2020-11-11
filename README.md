# tech-task

Install modules
```
npm install
```

Run server
```
node index.js
```

Run server with automatic reloading after edits
```
nodemon index.js
```

-----------------------------

Starts server on port specified
```
app.listen(port, () => console.log('Server listening on port 3000'))
```

Handles GET by sending index.html
```
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
```

Handles GET by redirection to /
```
app.get('/redirect', (req, res) => {
    res.redirect('/');
})
```

Handles POST by getting variables from body
```
app.post('/auth', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    // Some logic
}
```
