const loginHTML = {
  header: '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    ' <meta charset="UTF-8">' +
    ' <link rel="stylesheet" type="text/css" href="css/style.css">' +
    ' <title>Login: Result</title>' +
    '</head>' +
    '<body>',
  footer: '</body>' +
    '</html>',
  button: (buttontxt) => {
    return '<form action="/" method="get">' +
    ' <button type="submit">' + buttontxt + '</button>' +
    '</form>';
  }
};

module.exports = loginHTML;
