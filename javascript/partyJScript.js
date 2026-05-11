$( document ).ready(function() {
    var oldTune = new Audio("./audio/AMemoryOfAMusicBox.mp3");

    $( "#happiestDay" ).click(function () {
        oldTune.loop = true;
        oldTune.play();
    });
});