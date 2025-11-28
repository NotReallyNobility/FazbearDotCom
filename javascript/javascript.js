const bannerHonk = document.getElementsByClassName("honkable");
var honkNoise = new Audio("./audio/freddyHonk.mp3");
console.log(bannerHonk.length);


console.log("javascript implimented.");
for (let i = 0; i < bannerHonk.length; i++) {
    bannerHonk[i].addEventListener("click", function () {
        console.log("clicked");
        honkNoise.currentTime = 0;
        honkNoise.play();
    });
}