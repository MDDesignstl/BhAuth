
var dataCenterAuthUrl = 'https://auth.bullhornstaffing.com/oauth/authorize'

//Assemble the Auth url to be used in the Auth Call
function getAuthUrl(dataCenterAuthUrl, client_id, redirect, username, password){
  var redirect_uri='';
  if (redirect) {
    redirect_uri = 'redirect_uri='+redirect;
  }
  var authUrl=dataCenterAuthUrl +
      '?action=Login&response_type=code&' +
      'client_id='+client_id+'&' +
      'username='+username+'&' +
      'password='+password+'&' +
      redirect_uri;
  return authUrl;
}

//Use the AuthUrl to retrive and return Auth Code
function getAuthCode(authUrl){
  var code='';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        responseUrl = xhr.responseUrl;
        var matches = responseUrl.match(/code=([^&]*));
        code = matches[1];
      }
    };
  xhr.open("GET",authUrl, True);
  xhr.send();

return code;

};
