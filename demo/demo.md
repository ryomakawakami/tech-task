Show what is made with
```
npm init
```

---------------------------------------

Switch to pre-initialized directory with index.html, style.css, output.ejs, index.html.

Show index.html with live server.

---------------------------------------

Add
```
const server = http.createServer((req, res) => {
  // Handle GET request
  if (req.method === 'GET') {
    switch (req.url) {
      case '/style.css':
        serveFile(res, path.join(__dirname, 'style.css'))
        break
      default:
        serveFile(res, path.join(__dirname, 'index.html'))
        break
    }
  }
}).listen(3000)
```

Explain the two GET routes and show it running with
```
node index.js
```

---------------------------------------
Show handling of POST request. It logs to console what the user enters.

```
// Handle POST request
else if (req.method === 'POST') {
  // Acquire data from POST
  var body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })

  // Parse data
  req.on('end', () => {
    // Get arguments from POST
    var user = parse(body)
    console.log(user)
  })
}
```

---------------------------------------
Now we add code to process it

```
// Customize content for user (no error handling)
var content = fs.readFileSync(path.join(__dirname, 'output.ejs'), 'utf-8')
var status = login(user.username, user.password)
res.end(ejs.render(content, {status: status, username: user.username}))
```
