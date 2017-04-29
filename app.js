var express = require('express')
var jsonfile = require('jsonfile')

var app = express()

var data; 
jsonfile.readFile("userSchema.json", function(err, obj) {
    console.log(obj);
    data = obj;
})

app.get('/', function (req, res) {
  res.send("Hello Jill (or Jilian)");
})

app.get('/getUsers', function (req, res) {
  res.json(data);
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

