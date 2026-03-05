const scare = document.getElementById("scare");
var screech = new Audio("./audio/jumpscareSound.mp3");

scare.addEventListener("click", function() {
    screech.currentTime = 0;
    screech.play();
    let jumpscare = window.open("", "", "width=610, height=357");
    jumpscare.document.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
    
                <title>BOO!</title>
            </head>
            <body style="background-color: black">
                <img src="images/freddyJumpscare.webp" alt="Freddy Jumpscare">
            </body>
        </html>`);
        setTimeout(function () {
            jumpscare.close();
        }, 3000);
});