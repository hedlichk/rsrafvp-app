var VERSION = "Version 2.0.1, Jan 16, 2021";
var skipSplash = localStorage.getItem("skipSplash");
var skipWhatsNew = localStorage.getItem("skipWhatsNew");

document.getElementById("btnSplashContinue").addEventListener("click",closeSplash);


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/assets/js/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

function checkFlags() {

    //  Setup skipSplash with initial value
    if ((skipSplash == null) || (skipSplash == undefined) || (skipSplash == "")) {

        localStorage.setItem("skipSplash",false);

        //  On first time, change null to initial value
        skipSplash = localStorage.getItem("skipSplash");
    };

    //  Setup skipWhatsNew with initial value
    if ((skipWhatsNew == null) || (skipWhatsNew == undefined) || (skipWhatsNew == "")) {

        localStorage.setItem("skipWhatsNew",false);

        //  On first time, change null to initial value
        skipWhatsNew = localStorage.getItem("skipWhatsNew");
    };

}


function showWhatsNew() {

    $("#mdlWhatsNew").modal('show');
    localStorage.setItem("skipWhatsNew",true);
}


function closeSplash() {

    localStorage.setItem("skipSplash",true);
    location.href = 'myassessment.html';
}


window.addEventListener("load", function() {

    //  Set and populate version information
    localStorage.setItem("version", VERSION);
    document.getElementById("fldReleaseVersion").innerHTML = VERSION;

    //  Initialize splash and whats new modal flags
    checkFlags();

    //  Show What's New modal one time
    if (skipWhatsNew == "false") {
        showWhatsNew();
    }

    //  Move to main page instead of showing splash and what's new
    if ((skipWhatsNew == "true") && (skipSplash == "true")) {
        location.href = 'myassessment.html';
    }

})


