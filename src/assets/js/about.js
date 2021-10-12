document.getElementById("linkLogin").addEventListener("click", navLogin);
document.getElementById("linkAbout").addEventListener("click", navAbout);
document.getElementById("linkAboutRSRAFVP").addEventListener("click", navAboutRSRAFVP);
document.getElementById("linkSecurityRule").addEventListener("click", navAboutSecurity);
document.getElementById("linkPrivacyRule").addEventListener("click", navAboutPrivacy);

document.getElementById("activeAssessment").addEventListener("click", navAssessment);
document.getElementById("savedAssessments").addEventListener("click", navSavedAssessments);
document.getElementById("allAssessments").addEventListener("click", navAllAssessments);

function navLogin() { window.location.href="/login.html"; };
function navAbout() { window.location.href="/about.html"; };
function navAboutRSRAFVP() { window.location.href="/aboutrsrafvp.html"; };
function navAboutSecurity() { window.location.href="/aboutsecurity.html"; };
function navAboutPrivacy() { window.location.href="/aboutprivacy.html"; };

function navAssessment() { window.location.href="/myassessment.html"; };
function navSavedAssessments() { window.location.href="/mylisting.html"; };
function navAllAssessments() { window.location.href="/allassessments.html"; };
