require('fs')

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    b =  fs.readFileSynch("index.html");
    Response.Send(b.toString());
});

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
