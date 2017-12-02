var playlist = new Playlist();

var photo = new Song("photograph", "edSheeran", 3);

var cry = new Song("despacito", "Luis Fonsi  ", 3.4);


playlist.add(photo);
playlist.add(cry);

var playlistElement = document.getElementById("playlist");


playlist.renderInElement(playlistElement);


var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");
var stopButton = document.getElementById("stop");
playButton.onclick = function() {
    playlist.renderInElement(playlistElement);

    playlist.play();
    playlist.renderInElement(playlistElement);


}

nextButton.onclick = function() {
    playlist.renderInElement(playlistElement);

    playlist.next();
    playlist.renderInElement(playlistElement);


}


stopButton.onclick = function() {
    playlist.renderInElement(playlistElement);

    playlist.stop();
    playlist.renderInElement(playlistElement);

}