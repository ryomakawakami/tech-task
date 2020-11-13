const ejs = require('ejs')

const { parse } = require('querystring')

const fs = require('fs')
const path = require('path')

const http = require('http')

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
    if (users[username] == password) {
      return 0;
    } else {
      return 1;
    }
  } else {
    return 2;
  }
}
