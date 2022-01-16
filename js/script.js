$(document).ready(function () {
    let cookieBanner = $("#cookie_banner");
    let welcomeBanner = $("#welcome_banner");
    let cookiesAcceptButton = $("#cookies_akzeptieren");
    let cookiesDenieButton = $("#cookies_ablehnen");
    
    let cookiesAccepted = Cookies.get("cookiesAccepted");
    if (cookiesAccepted == 'true') {
        welcomeBanner.delay(500).fadeIn(200);
        setTimeout(() => {
            welcomeBanner.fadeOut(200);
        }, 3000);
    } else {
        cookieBanner.delay(500).fadeIn(200);
    }

    cookiesAcceptButton.click(function() {
        cookieBanner.fadeOut(200);
        Cookies.set("cookiesAccepted", true);
    });

    cookiesDenieButton.click(function() {
        cookieBanner.fadeOut(200);
    });

});