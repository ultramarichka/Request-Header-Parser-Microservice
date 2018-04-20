var express = require('express');
var app = express();


//for all calls
//? or should I use app.get('/', callback);
app.use(callback);

function callback(req, res){
  
  req.on('error', function(err) {
    res.end(err);
  });
  
  var lang = req.headers['accept-language'];
  var browser = req.headers['user-agent'];

  var ip = req.headers['x-forwarded-for'].split(',')[0] //|| 
         //req.connection.remoteAddress //|| 
         //req.socket.remoteAddress || 
         //req.connection.socket.remoteAddress
  
  var headerParams = {"ipaddress": ip,
                      "language": lang,
                      "software": browser
                      };
  
  res.send(headerParams);  
}

app.listen(8080);
