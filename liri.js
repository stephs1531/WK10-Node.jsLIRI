//LIRI command line interface
require("dotenv").config();

//require stuff to make spotify work
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var newSpotify = new Spotify(keys.spotify);

var request = require("request");
var inquirer = require("inquirer");
// var colors = require("colors");
var fs = require("fs");

//call the function to start LIRI
startLiri();

//LIRI function
function startLiri() {
    console.log("stuff happens!");
}