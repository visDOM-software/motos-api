var express = require("express");
var cors = require('cors');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
//var cookieParser = require("cookie-parser");

//initialize
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());

var motos = require('./data/motos');

//pages
app.get("/", function(req, res){
    res.send("motos-api");
});

app.get("/motos", function(req, res){
    res.send(motos);
});

// app.get("/index", function(req, res){
//     res.sendFile(path.join(__dirname + '/pages/index.html'));
// });

// // app.get("/home", a.authorize, function(req, res){
// //     res.sendFile(path.join(__dirname + '/pages/home.html'));
// // });

// app.get("/login", function(req, res){
//     res.sendFile(path.join(__dirname + '/pages/login.html'));
// });

// app.post("/login", function(req, res, next){
//     a.login(req, res, next);
// });

var port = process.env.PORT || 8080;


app.listen(port, function(){
    console.log("working...");
});