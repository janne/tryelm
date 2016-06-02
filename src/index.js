'use strict';

require('./index.html');
var Elm = require('./Main');
var app = Elm.Main.embed(document.getElementById('main'));

var compileToString = require("node-elm-compiler").compileToString;
compileToString(["./Main.elm"], { yes: true }).then(function(data){
    console.log("Text", data.toString());
});
