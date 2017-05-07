var express = require('express')
var jsonfile = require('jsonfile')
var request = require('request')
var mongoose = require('mongoose')

var app = express()

Schema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String
}),

User = mongoose.model('User', Schema);

var uri = process.env.MONGOLAB_URI;

mongoose.connect(uri, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

console.log("Hello! I am here!")

app.get('/', function (req, res) {
    res.send("Hello Jill (or Jilian)... 06-05-2017");
})

app.get('/getUsers', function (req, res) {
    console.log('Nothing here yet!');
})

app.post('/user', function (req, res) {
    var user = new User({
        firstName: "First Name",
        lastName: "Last Name"
    });
    user.id = user._id;

    user.save(function (err) {
        res.json(200, user);
    });
})

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});

