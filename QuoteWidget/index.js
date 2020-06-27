let request = require('request');

request("http://quotes.rest/qod.json", function(err, res, body){
    let bodyJson = JSON.parse(body);
    let randomquote = bodyJson['contents']['quotes'][0]['quote'];
    // console.log(bodyJson['contents']['quotes'][0]['quote']);
    document.getElementById('quote').innerHTML = randomquote;
})

setInterval(function(){
    request("http://quotes.rest/qod.json", function(err, res, body){
    let bodyJson = JSON.parse(body);
    let randomquote = bodyJson['contents']['quotes'][0]['quote'];
    // console.log(bodyJson['contents']['quotes'][0]['quote']);
    document.getElementById('quote').innerHTML = randomquote;
})
}
    ,5000);