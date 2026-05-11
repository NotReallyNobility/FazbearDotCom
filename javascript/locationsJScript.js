$( document ).ready(function() {
    var rockAndRoll = new Audio("./audio/MontyRockAndRoll.mp3");
    $( "#montyImage" ).click(function () {
        rockAndRoll.currentTime = 0;
        rockAndRoll.play();
    });

    var wantAnAutograph = new Audio("./audio/RoxyWantAnAutograph.mp3");
    $( "#roxyImage" ).click(function () {
        wantAnAutograph.currentTime = 0;
        wantAnAutograph.play();
    });
});