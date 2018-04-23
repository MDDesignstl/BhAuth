const https = require("https");
//Assemble the Auth url to be used in the Auth Call
function getAuthUrl(dataCenterAuthUrl, client_id, redirect, username, password) {
  var redirect_uri='';
  if (redirect) {
    redirect_uri = '&redirect_uri='+redirect;
  }
  var authUrl=dataCenterAuthUrl +
      '?action=Login&response_type=code&' +
      'client_id='+client_id+'&' +
      'username='+username+'&' +
      'password='+password +
      redirect_uri;
  return authUrl;
}

//Use the AuthUrl to retrive and return Auth Code
function getAuthCode(dataCenterAuthUrl, client_id, redirect, username, password){

  authUrl = getAuthUrl(dataCenterAuthUrl, client_id, redirect, username, password);

console.log(authUrl);
  var code='';
  console.log("hello");
  https.get(authUrl, (res) => {



    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    responseUrl = res.headers.location;
    var codePattern = new RegExp('code=([\^&]*)')
    matches = responseUrl.match(codePattern);
    console.log('Auth Code: ' + matches[1]);
    code = matches[1];

  }).on('error', (e) => {
    console.error(e);
});

return code;

};

//Node server for testing

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

//Tests

CDAUTHURL='';
CLIENT_ID='';
CLIENT_SECRET='';
USERNAME='';
PASSWORD='';

authCode = getAuthCode(CDAUTHURL, CLIENT_ID, null, USERNAME, PASSWORD);
console.log(authCode);
//process.exit();
