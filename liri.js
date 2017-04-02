var fs = require('fs');
var arg2 = process.argv[2];
var arg3 = process.argv[3];
var request = require('request');
//For twitter
var keys = require('./keys.js');
var Twitter = require('twitter');
var params = 20;
var client = new Twitter({
     consumer_key: keys.twitterKeys.consumer_key,
     consumer_secret: keys.twitterKeys.consumer_secret,
     access_token_key: keys.twitterKeys.access_token_key,
     access_token_secret: keys.twitterKeys.access_token_secret
});

//For spotify
var spotify = require('spotify');

function getTweets(){
     client.get('statuses/user_timeline', params, function(error, tweets, response){
          if (!error) {
               for (var i = 0; i < tweets.length; i++) {
                    console.log(tweets[i].text + " Created on: " + tweets[i].created_at);
                }       
          } else {
               console.log(error);
          }
     });
}

function spotify_this_song(song) {
    if(song == null) {
        song = "The Sign";
    }
    spotify.search({ type : 'track', query: song }, function(error, data) {
        if (error) {
            console.log(erro);
            return;
        }
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
     });
}


spotify_this_song(arg3);
