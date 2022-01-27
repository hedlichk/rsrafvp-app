window.onload = NavAuthorized();

function NavAuthorized() {

    var user = localStorage.userName;

    //  Turn on My Saved Assessments buttons if user is authorized
    if (user != "Guest" && user != null && user != "") {
        //document.getElementById("btnMyAssessments").disabled = false;
        //document.getElementById("btnMyAssessments").setAttribute("class","btn");
    }
}