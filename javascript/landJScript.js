//Rating selection code
let numbers = [0, 0, 0, 0];

const numberTexts = document.getElementsByClassName("aggressionNumber");

const leftArrows = document.getElementsByClassName("leftArrow");
const rightArrows = document.getElementsByClassName("rightArrow");

console.log(numbers[0]);
for (let i = 0; i < numbers.length; i++) {
    leftArrows[i].addEventListener("click", function () {
        if (numbers[i] != 0) {
            numbers[i]--;
            numberTexts[i].innerText = numbers[i];
        }
    });

    rightArrows[i].addEventListener("click", function () {
        if (numbers[i] != 20) {
            numbers[i]++;
            numberTexts[i].innerText = numbers[i];
        }
    });
}






//Possibilities for the different combinations
const clickable = document.getElementById("rateClickable");
var call = new Audio("./audio/night6call.mp3");

clickable.addEventListener("click", function () {
    if ((numbers[0] == 1) && (numbers[1] == 9) && (numbers[2] == 8) && (numbers[3] == 7)) {
        call.currentTime = 0;
        call.play();
    } else {
        let index = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[index] < numbers[i]) {
                index = i;
            }
        }
        let character = ["Freddy", "Bonnie", "Chica", "Foxy"];
        let food = ["Pizza", "Hamburgers", "Harissa Chicken Wings", "Pulled Pork"];
        let hobby = ["Roadtrips", "Listening To Kid's Stories", "Cooking", "Adventuring"];
        let role = ["Singer", "Bassist", "Backup Singer", "Story Teller"];

        let myWindow = window.open("", "", "width=500, height=500");
        myWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
        
                    <title>Your Favorite Character!</title>
        
                    <link href="css/style.css" rel="stylesheet">
                </head>
                <body>
                    <h1>Your favorite is ` + character[index] + `!</h1>
                    <img src="images/claudia` + character[index] + `.png" alt="Bonnie on stage" height="200" class="character rounded">
                    <p>` + character[index] + `'s loves to eat ` + food[index] + `!</p>
                    <p>` + character[index] + `'s favorite hobby is ` + hobby[index] + `</p>
                    <p>` + character[index] + `'s role in the band is ` + role[index] + `</p>
                </body>
            </html>`);
    }
    
});