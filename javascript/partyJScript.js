const happiestDay = document.getElementById("happiestDay");
var oldTune = new Audio("./audio/AMemoryOfAMusicBox.mp3");

happiestDay.addEventListener("click", function () {
    oldTune.loop = true;
    oldTune.play();
});