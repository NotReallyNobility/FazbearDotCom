const nose = document.getElementById("bobbleHead");
const newspaper = document.getElementById("newspaper");
var shriek = new Audio("./audio/Shriek.mp3");
const regex = /Paper/;   //new RegExp("Paper");

nose.addEventListener("click", function () {
    shriek.currentTime = 0;
    shriek.play();
    
    //Checks which newspaper is selected and switches it.
    if (regex.test(newspaper.src)) {
        newspaper.src = "./images/fnaf3EndingSecret.png";
    } else {
        newspaper.src = "./images/fnaf3EndingPaper.png";
    }
});