const ejs = require('ejs')

const { parse } = require('querystring')

const fs = require('fs')
const path = require('path')

const http = require('http')
const server = http.createServer((req, res) => {
  // Handle GET request
  if (req.method === 'GET') {
    switch (req.url) {
      case '/style.css':
        serveFile(res, path.join(__dirname, 'style.css'), 'text/css')
        break
      default:
        serveFile(res, path.join(__dirname, 'index.html'))
        break
    }
  }

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
      console.log(body)
      var user = parse(body)

      // Customize content for user (no error handling)
      var content = fs.readFileSync(path.join(__dirname, 'output.ejs'), 'utf-8')
      var status = login(user.username, user.password)
      res.end(ejs.render(content, {status: status, username: user.username}))
    })
  }
}).listen(3000)

/********************/
/* Helper functions */
/********************/

// Serves file at pathToFile to response
function serveFile(res, pathToFile, contentType = 'text/html') {
  fs.readFile(pathToFile, (error, data) => {
    if (data) {
      res.writeHead(200, {'Content-Type': contentType})
      res.end(data)
    }
  })
}

// 0: success, 1: wrong password, 2: user doesn't exist
function login(username, password) {
  var users = {
    'oh': 'io',
    'marco': 'polo',
    'hello': 'world',
    'kermit': 'frog'
  }

  if (username in users) {
    if (users[username] === password) {
      return 0;
    } else {
      return 1;
    }
  } else {
    return 2;
  }
}
