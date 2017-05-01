var express = require('express')
var jsonfile = require('jsonfile')
var request = require('request')

var app = express()

var data;
jsonfile.readFile("userSchema.json", function (err, obj) {
    console.log(obj);
    data = obj;
})

app.get('/', function (req, res) {
    res.send("Hello Jill (or Jilian)... 01-05-2017");
})

app.get('/getUsers', function (req, res) {
    res.json(data);
})

app.get('/getCrimeData', function (req, res) {
    request('https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01', function (error, response, body) {
        res.json(body);
    });
})

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});

