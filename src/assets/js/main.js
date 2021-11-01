
document.getElementById("activeAssessment").addEventListener("click", navAssessment);
document.getElementById("savedAssessments").addEventListener("click", navSavedAssessments);
document.getElementById("allAssessments").addEventListener("click", navAllAssessments);

function navAssessment() { window.location.href="/myassessment.html"; };
function navSavedAssessments() { window.location.href="/mylisting.html"; };
function navAllAssessments() { window.location.href="/allassessments.html"; };
