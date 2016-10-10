"use strict";

$(document).ready(function() {
  console.log("jquery is ready");
  $.ajax({
    url: "../songs.json"
  }).done(function(data) {
    console.log("data", data);
    // Get a reference to the DOM element that
    // holds all the songs
    var contentEl = $("#all-my-songs");
    
    /*
      Loop through all the songs and build the
      DOM elements for each one
     */
    var songData = "";
    var currentSong;

    for (var i = 0; i < data.songs.length; i++) {
      currentSong = data.songs[i];

      /*
        Build up some HTML to display the songs,
        artists, and albums
       */
      songData += "<div class='song-block'>";
        songData += "<h1>" + currentSong.title + "</h1>";
        songData += "<div class='artist'>Performed by ";
          songData += currentSong.artist;
        songData += "</div>";
        songData += "<div class='album'>On the album ";
          songData += currentSong.album;
        songData += "</div>";
      songData += "</div>";
    }

    console.log("songData", songData);
    contentEl.html(songData);
  }).fail(function(error) {
    console.log( "error" , error);
  });

});
