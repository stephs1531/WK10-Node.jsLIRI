//LIRI command line interface
require("dotenv").config();

//require stuff to make spotify work
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var request = require("request");
var inquirer = require("inquirer");
// var colors = require("colors");
var fs = require("fs");

//call the function to start LIRI
startLiri();

//LIRI function
function startLiri() {
    console.log("stuff happens!");

    //prompt the user to pick which option they want to run
    inquirer.prompt([
        {
            type: "list",
            name: "program",
            message: "What do you want to do?",
            choices: [
                "concert-this",
                "spotify-this-song",
                "movie-this",
                "do-what-it-says"
            ]
        }
    ]) .then((answers) => {
        
            //logic to determine which option you want the program to run
            switch(answers.program) {
                case "concert-this":
                console.log("concert time!");
                break;

                case "spotify-this-song":
                console.log("spotify time");
                    inquirer.prompt ([
                        {
                            type: "input",
                            name: "song",
                            message: "What song do you want to search?"
                        }
                    ]) .then ((answers) => {
                        var song = answers.song;
                        musicInfo(song);
                        // console.log(song);
                    })
                break;

                case "movie-this":
                console.log("movies!!");
                break;

                case "do-what-it-says":
                console.log("what she said!");
                break;

                default:
                console.log("Please make a selection");
            }
    })
}

//spotify function
function musicInfo(song) {

    //get api keys for spotify
    var newSpotify = new Spotify(keys.spotify);

    newSpotify.search({
        type: "track",
        query: "song",
        limit: 1
    }), (err, data) => {
        console.log(data);
        if (err) {
            console.log(`\n${err}\n`);
        }

        //create variables for spotify information we want
        let artist = data.tracks.items[0].album.artists[0].name;
		let title = data.tracks.items[0].name;
		let URL = data.tracks.items[0].album.artists[0].external_urls.spotify;
        let album = data.tracks.items[0].album.name;
        
        console.log("\nYour Song: \n");
        console.log("${title} by ${artist} on the album ${album}");
        console.log("Listen at ${url}");
    }

}