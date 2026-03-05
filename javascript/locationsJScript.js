const monty = document.getElementById("montyImage");
var rockAndRoll = new Audio("./audio/MontyRockAndRoll.mp3");

monty.addEventListener("click", function () {
    rockAndRoll.currentTime = 0;
    rockAndRoll.play();
});

const roxy = document.getElementById("roxyImage");
var wantAnAutograph = new Audio("./audio/RoxyWantAnAutograph.mp3");

roxy.addEventListener("click", function () {
    wantAnAutograph.currentTime = 0;
    wantAnAutograph.play();
});