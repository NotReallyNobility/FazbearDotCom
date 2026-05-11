$( document ).ready(function() {
    var submitButton = $( "#submit" );
    var emailInput = $( "#emailInput" );
    const regex = /.+?@.+?(\.com|\.edu|\.org|\.net|\.gov)/

    emailInput.on("input", function() {
        var input = emailInput.val();
        if (regex.test(input)) {
            submitButton.removeAttr("disabled");
        } else {
            submitButton.attr("disabled", "disabled");
        }
    });
});