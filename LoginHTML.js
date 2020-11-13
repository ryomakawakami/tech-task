const loginHTML = {
  header: '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    ' <meta charset="UTF-8">\n' +
    ' <link rel="stylesheet" type="text/css" href="css/style.css">\n' +
    ' <title>Login: Result</title>\n' +
    '</head>\n' +
    '<body>\n',
  footer: '</body>\n' +
    '</html>\n',
  button: (buttontxt) => {
    return '<form action="/" method="get">\n' +
    ' <button type="submit">' + buttontxt + '</button>\n' +
    '</form>\n';
  }
};

module.exports = loginHTML;
