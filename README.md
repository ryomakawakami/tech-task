# tech-task

Install modules (if using ejs)
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

Starts server on port specified. Callback function handles all user requests.
```
http.createServer((req, res) => callback function).listen(port)
```

req.method is either 'GET' or 'POST' (in our case)

We can get what the URL is with req.url

Can serve stylesheet because a link tag does a get request for the item specified. We can handle the request by checking for req.url==='whatever.css'.

-----------------------------

By the way, our package.json is a mess.
