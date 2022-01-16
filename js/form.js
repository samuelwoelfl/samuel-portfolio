function sendMail() {
    let inputs = $("input:not([type=submit])");
    let mailInput = $("input#mail");
    let mailInputValue = mailInput.val();

    $.each(inputs, function (i, input) {
        input = $(input);
        let value = input.val();
        let selector = ".error" + "[for='" + input.attr("id") + "']";
        let message = "";
        
        if (value == "") {
            // console.log("Leer: " + input.attr('id'));
            message = "Dieses Feld muss ausgefüllt werden";
        } else {
            if (input.attr("id") == "mail") {
                let countAt = (mailInputValue.match(/@/g) || []).length;
                let countDot = (mailInputValue.match(/\./g) || []).length;

                console.log("Äts: " + countAt);
                console.log("Punkte: " + countDot);

                if (countAt == 1 && countDot >= 1) {
                    message = ""
                } else {
                    message = "Dies ist keine valide Mail"
                }
            }
        }

        $(selector)[0].innerHTML = message;
    });
}