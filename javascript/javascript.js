$( document ).ready(function() {
    var honkNoise = new Audio("./audio/freddyHonk.mp3");

    console.log("javascript implimented.");
    $(".honkable").click(function() {
        console.log("clicked");
        honkNoise.currentTime = 0;
        honkNoise.play();
    });
});