
var dataCenterAuthUrl = 'https://auth.bullhornstaffing.com/oauth/authorize'


fucntion getAuthUrl(dataCenterAuthUrl,client_id,redirect,username,password){

var redirect_uri='';

if (redirect) {
  redirect_uri = 'redirect_uri='+redirect;
}

var authUrl=dataCenterAuthUrl +
    '?action=Login&response_type=code&' +
    'client_id='+client_id+'&' +
    'username='+username+'&' +
    'password='+password+'&' +
    redirect_uri

return authUrl;
}

function getAuthCode(authUrl){
  var code='';
  var xhr = new XMLHttpRequest();
  xhr.read = function () {
    if (this.readyState == 4 && this.status == 200) {
        responseUrl = xhr.responseUrl;

        var str     = responseUrl
var matches = str.match(/code=([^&]*));
var = (matches[1]);

      }
    };
  xhr.open("GET",authUrl, True);
  xhr.send();



};
