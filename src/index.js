'use strict';

require('./index.html');
var Elm = require('./Main');
var app = Elm.Main.embed(document.getElementById('main'));

var compileToString = require("node-elm-compiler").compileToString;

/*
var fs = require('fs');
fs.writeFile("/tmp/Code.elm", "import Html exposing (..)\ntext \"Hello, Elm!\"", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
compileToString(["/tmp/Code.elm"], { yes: true }).then(function(data){
    console.log("Code", data.toString());
});
*/
