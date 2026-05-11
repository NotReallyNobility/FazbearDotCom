$( document ).ready(function() {
    const newspaper = $("#newspaper")
    var shriek = new Audio("./audio/Shriek.mp3");
    const regex = /Paper/;

    $("#bobbleHead").click( function() {
        shriek.currentTime = 0;
        shriek.play();
        console.log(newspaper.attr( "src" ))
        //Checks which newspaper is selected and switches it.
        if (regex.test(newspaper.attr( "src" ))) {
            newspaper.attr( "src", "./images/fnaf3EndingSecret.png");
        } else {
            newspaper.attr( "src", "./images/fnaf3EndingPaper.png");
        }
    });
});