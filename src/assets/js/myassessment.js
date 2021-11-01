//  Global Variables
var activeAssessment = new Assessment;

//  Open first tab by default
window.onload = document.getElementById("tabInfo").click();

//  Opening PDF modal, update the data in the modal
window.onfocus = document.getElementById("modalExport").addEventListener("focusin", updatePDFPreview);

//  Assessment Tab 1 field listeners
document.getElementById("fldTherapist").addEventListener("focusout",assessmentTherapist);
document.getElementById("fldClientRef").addEventListener("focusout",assessmentClientRef);
document.getElementById("fldAssessDate").addEventListener("focusout",assessmentDate);
document.getElementById("fldAssessType").addEventListener("focusout",assessmentType);
document.getElementById("fldState").addEventListener("focusout",assessmentState);
document.getElementById("fldCountry").addEventListener("focusout",assessmentCountry);
document.getElementById("fldAge").addEventListener("focusout",assessmentAge);
document.getElementById("chkFemale").addEventListener("click", assessmentFemaleChg);
document.getElementById("chkMale").addEventListener("click", assessmentMaleChg);
document.getElementById("fldDiagnosis").addEventListener("focusout",assessmentDiagnosis);

//  Assessment Tab 2 field listeners
document.getElementById("A1").addEventListener("focusout",assessmentAnswers);
document.getElementById("A2").addEventListener("focusout",assessmentAnswers);
document.getElementById("A3").addEventListener("focusout",assessmentAnswers);
document.getElementById("A4").addEventListener("focusout",assessmentAnswers);
document.getElementById("A5").addEventListener("focusout",assessmentAnswers);
document.getElementById("A6").addEventListener("focusout",assessmentAnswers);
document.getElementById("A7").addEventListener("focusout",assessmentAnswers);
document.getElementById("A8").addEventListener("focusout",assessmentAnswers);
document.getElementById("A9").addEventListener("focusout",assessmentAnswers);
document.getElementById("A10").addEventListener("focusout",assessmentAnswers);
document.getElementById("A11").addEventListener("focusout",assessmentAnswers);
document.getElementById("A12").addEventListener("focusout",assessmentAnswers);
document.getElementById("A13").addEventListener("focusout",assessmentAnswers);
document.getElementById("A14").addEventListener("focusout",assessmentAnswers);
document.getElementById("A15").addEventListener("focusout",assessmentAnswers);
document.getElementById("A16").addEventListener("focusout",assessmentAnswers);
document.getElementById("A17").addEventListener("focusout",assessmentAnswers);
document.getElementById("A18").addEventListener("focusout",assessmentAnswers);
document.getElementById("A19").addEventListener("focusout",assessmentAnswers);
document.getElementById("A20").addEventListener("focusout",assessmentAnswers);
document.getElementById("A21").addEventListener("focusout",assessmentAnswers);
document.getElementById("A22").addEventListener("focusout",assessmentAnswers);
document.getElementById("A23").addEventListener("focusout",assessmentAnswers);
document.getElementById("A24").addEventListener("focusout",assessmentAnswers);
document.getElementById("A25").addEventListener("focusout",assessmentAnswers);
document.getElementById("A26").addEventListener("focusout",assessmentAnswers);
document.getElementById("A27").addEventListener("focusout",assessmentAnswers);
document.getElementById("A28").addEventListener("focusout",assessmentAnswers);
document.getElementById("A29").addEventListener("focusout",assessmentAnswers);
document.getElementById("A30").addEventListener("focusout",assessmentAnswers);
document.getElementById("A31").addEventListener("focusout",assessmentAnswers);
document.getElementById("A32").addEventListener("focusout",assessmentAnswers);
document.getElementById("A33").addEventListener("focusout",assessmentAnswers);

document.getElementById("noteHealth").addEventListener("focusout",assessmentNote);
document.getElementById("notePersonal").addEventListener("focusout",assessmentNote);
document.getElementById("noteMealPrep").addEventListener("focusout",assessmentNote);
document.getElementById("noteFinancial").addEventListener("focusout",assessmentNote);
document.getElementById("noteReading").addEventListener("focusout",assessmentNote);
document.getElementById("noteWriting").addEventListener("focusout",assessmentNote);
document.getElementById("noteFunctional").addEventListener("focusout",assessmentNote);
document.getElementById("notePPA").addEventListener("focusout",assessmentNote);

//  Assessment Tab 3 field listeners
document.getElementById("tabScore").addEventListener("click", scoreAssessment);
document.getElementById("noteOverall").addEventListener("focusout",assessmentNote);

//  Assessment button listeners
document.getElementById("btnConfirmReset").addEventListener("click", resetAssessment);
document.getElementById("btnCSVExport").addEventListener("click", exportCSVAssessment);
document.getElementById("btnPDFExport").addEventListener("click", exportPDFAssessment);
document.getElementById("btnConfirmSave").addEventListener("click", saveAssessment);

function defaultTab() {
    $("#tabs").tabs({
        active: 0,
        activate: function (event, ui) {
          var active = $('#tabs-1').tabs('option', 'active');
          $("#tabid").html($("#tabs ul>li a").eq(active).attr("href"));
        }        
    });
}

//  Tab 1 functions to populate class data

function assessmentTherapist() { 
    activeAssessment.therapist = document.getElementById("fldTherapist").value;
};

function assessmentClientRef() { 
    activeAssessment.clientRef = document.getElementById("fldClientRef").value;
};

function assessmentDate() { 
    activeAssessment.date = Date(document.getElementById("fldAssessDate").value);
};

function assessmentType() { 
    activeAssessment.type = document.getElementById("fldAssessType").value;
};

function assessmentState() { 
    activeAssessment.state = document.getElementById("fldState").value;
};

function assessmentCountry() { 
    activeAssessment.country = document.getElementById("fldCountry").value;
};

function assessmentAge() { 
    activeAssessment.clientAge = document.getElementById("fldAge").value;
};

function assessmentFemaleChg() { 
    document.getElementById("chkFemale").checked = true;
    activeAssessment.clientGender = "Female";
    document.getElementById("chkMale").checked = false;  
};

function assessmentMaleChg() { 
    document.getElementById("chkFemale").checked = false;
    document.getElementById("chkMale").checked = true;
    activeAssessment.clientGender = "Male";
};

function assessmentDiagnosis() { 
    activeAssessment.clientDiagnosis = document.getElementById("fldDiagnosis").value;
};

//  Tab 2 functions to populate class data

function assessmentAnswers() { 

    activeAssessment.answers[1] = document.getElementById("A1").value;
    activeAssessment.answers[2] = document.getElementById("A2").value;
    activeAssessment.answers[3] = document.getElementById("A3").value;
    activeAssessment.answers[4] = document.getElementById("A4").value;
    activeAssessment.answers[5] = document.getElementById("A5").value;
    activeAssessment.answers[6] = document.getElementById("A6").value;
    activeAssessment.answers[7] = document.getElementById("A7").value;
    activeAssessment.answers[8] = document.getElementById("A8").value;
    activeAssessment.answers[9] = document.getElementById("A9").value;
    activeAssessment.answers[10] = document.getElementById("A10").value;
    activeAssessment.answers[11] = document.getElementById("A11").value;
    activeAssessment.answers[12] = document.getElementById("A12").value;
    activeAssessment.answers[13] = document.getElementById("A13").value;
    activeAssessment.answers[14] = document.getElementById("A14").value;
    activeAssessment.answers[15] = document.getElementById("A15").value;
    activeAssessment.answers[16] = document.getElementById("A16").value;
    activeAssessment.answers[17] = document.getElementById("A17").value;
    activeAssessment.answers[18] = document.getElementById("A18").value;
    activeAssessment.answers[19] = document.getElementById("A19").value;
    activeAssessment.answers[20] = document.getElementById("A20").value;
    activeAssessment.answers[21] = document.getElementById("A21").value;
    activeAssessment.answers[22] = document.getElementById("A22").value;
    activeAssessment.answers[23] = document.getElementById("A23").value;
    activeAssessment.answers[24] = document.getElementById("A24").value;
    activeAssessment.answers[25] = document.getElementById("A25").value;
    activeAssessment.answers[26] = document.getElementById("A26").value;
    activeAssessment.answers[27] = document.getElementById("A27").value;
    activeAssessment.answers[28] = document.getElementById("A28").value;
    activeAssessment.answers[29] = document.getElementById("A29").value;
    activeAssessment.answers[30] = document.getElementById("A30").value;
    activeAssessment.answers[31] = document.getElementById("A31").value;
    activeAssessment.answers[32] = document.getElementById("A32").value;
    activeAssessment.answers[33] = document.getElementById("A33").value;
};

function assessmentNote() { 
    
    activeAssessment.comments[1] = document.getElementById("noteHealth").value;
    activeAssessment.comments[2] = document.getElementById("notePersonal").value;
    activeAssessment.comments[3] = document.getElementById("noteMealPrep").value;
    activeAssessment.comments[4] = document.getElementById("noteFinancial").value;
    activeAssessment.comments[5] = document.getElementById("notePhone").value;
    activeAssessment.comments[6] = document.getElementById("noteReading").value;
    activeAssessment.comments[7] = document.getElementById("noteWriting").value;
    activeAssessment.comments[8] = document.getElementById("noteFunctional").value;
    activeAssessment.comments[9] = document.getElementById("notePPA").value;
    activeAssessment.comments[10] = document.getElementById("noteOverall").value;
};

function scoreAssessment() { 

    //  Generate scores
    activeAssessment.scoreTotalQuestionsNA();
    activeAssessment.scoreTotalUncalcPoints();
    activeAssessment.scoreTotalAdjustPoints();
    activeAssessment.scoreTotalClientPoints();
    activeAssessment.scoreAssessmentRSRAFVP();
    activeAssessment.scoreAssessmentImpairment();
    activeAssessment.scoreAssessmentGCode();

    //  Display scores on screen
    document.getElementById("scoreTotalNA").value = activeAssessment.scoreTotalNA;
    document.getElementById("scoreTotalUncalc").value = activeAssessment.scoreTotalUncalcd + "pts";
    document.getElementById("scoreTotalAdjust").value = activeAssessment.scoreTotalAdjd + "pts";
    document.getElementById("scoreTotalClient").value = activeAssessment.scoreTotalClient + "pts";
    document.getElementById("scoreRSRAFVP").value = activeAssessment.scoreRSRAFVP + "%";
    document.getElementById("scoreImpairment").value = activeAssessment.scoreImpairment + "%";
    document.getElementById("scoreGCode").value = activeAssessment.scoreMedicare;

    //  Update session storage for all values
    setSessionStorage();

};

function setSessionStorage() {

    sessionStorage.setItem("sessionTherapist",activeAssessment.therapist);
    sessionStorage.setItem("sessionClientRef",activeAssessment.clientRef);
    sessionStorage.setItem("sessionAssessDate",activeAssessment.date);
    sessionStorage.setItem("sessionType",activeAssessment.type);
    sessionStorage.setItem("sessionState",activeAssessment.state);
    sessionStorage.setItem("sessionCountry",activeAssessment.country);
    sessionStorage.setItem("sessionAge",activeAssessment.clientAge);
    sessionStorage.setItem("sessionGender",activeAssessment.clientGender);
    sessionStorage.setItem("sessionDiagnosis",activeAssessment.clientDiagnosis);

    length = activeAssessment.headings.length;
    for (var i=1; i< length; i++) {
        sessionStorage.setItem("sessionH"+i,activeAssessment.headings[i]);
    }

    length = activeAssessment.questions.length;
    for (var i=1; i< length; i++) {
        sessionStorage.setItem("sessionQ"+i,activeAssessment.questions[i]);
    }

    length = activeAssessment.answers.length;
    for (var i=1; i< length; i++) {
        sessionStorage.setItem("sessionA"+i,activeAssessment.answers[i]);
    }

    length = activeAssessment.comments.length;
    for (var i=1; i< length; i++) {
        sessionStorage.setItem("sessionC"+i,activeAssessment.comments[i]);
    }

    sessionStorage.setItem("scoreTotalNA",activeAssessment.scoreTotalNA);
    sessionStorage.setItem("scoreTotalUncalcd",activeAssessment.scoreTotalUncalcd);
    sessionStorage.setItem("scoreTotalAdjd",activeAssessment.scoreTotalAdjd);
    sessionStorage.setItem("scoreTotalClient",activeAssessment.scoreTotalClient);
    sessionStorage.setItem("scoreRSRAFVP",activeAssessment.scoreRSRAFVP);
    sessionStorage.setItem("scoreImpairment",activeAssessment.scoreImpairment);
    sessionStorage.setItem("scoreMedicare",activeAssessment.scoreMedicare);

    console.log("setting the session storage");
    console.log(sessionStorage);
}

function resetAssessment() { 
    
    activeAssessment = new Assessment;
    sessionStorage.clear();
    location.reload();
    return false;
};

function updatePDFPreview() { 

    var datetime = new Date(sessionStorage.getItem("sessionAssessDate"));
    var datetimeString = datetime.getMonth() + "/" + datetime.getDate() + "/" + datetime.getFullYear();
    var location = sessionStorage.getItem("sessionState") + " / " + sessionStorage.getItem("sessionCountry");
    var ageNGender = sessionStorage.getItem("sessionAge") + " / " + sessionStorage.getItem("sessionGender");
    
    document.getElementById("lblTherapist").innerHTML = sessionStorage.getItem("sessionTherapist");
    document.getElementById("lblClientRef").innerHTML = sessionStorage.getItem("sessionClientRef");
    document.getElementById("lblDate").innerHTML = datetimeString;
    document.getElementById("lblType").innerHTML = sessionStorage.getItem("sessionType");
    document.getElementById("lblLocation").innerHTML = location;
    document.getElementById("lblAgeNGender").innerHTML = ageNGender;
    document.getElementById("lblDiagnosis").innerHTML = sessionStorage.getItem("sessionDiagnosis");

    length = activeAssessment.headings.length;
    for (var i=1; i< length; i++) {
        if (i < (length-1)) {
            document.getElementById("lblHeading"+i).innerHTML = "Section: " + sessionStorage.getItem("sessionH"+i);
        }
        else {
            document.getElementById("lblHeading"+i).innerHTML = sessionStorage.getItem("sessionH"+i);
        }
    }

    length = activeAssessment.questions.length;
    for (var i=1; i< length; i++) {
        document.getElementById("lblQuestion"+i).innerHTML = sessionStorage.getItem("sessionQ"+i);
    }

    length = activeAssessment.answers.length;
    for (var i=1; i< length; i++) {
        document.getElementById("lblAnswer"+i).innerHTML = sessionStorage.getItem("sessionA"+i);
    }

    length = activeAssessment.comments.length;
    for (var i=1; i< length; i++) {
        if (i < (length-1)) {
            document.getElementById("lblComment"+i).innerHTML = "Section comments: " + sessionStorage.getItem("sessionC"+i);
        }
        else {
            document.getElementById("lblComment"+i).innerHTML = "Overall comments: " + sessionStorage.getItem("sessionC"+i);
        }
    }

    document.getElementById("lblTNA").innerHTML = sessionStorage.getItem("scoreTotalNA");
    document.getElementById("lblTUNC").innerHTML = sessionStorage.getItem("scoreTotalUncalcd");
    document.getElementById("lblTADJ").innerHTML = sessionStorage.getItem("scoreTotalAdjd");
    document.getElementById("lblTCLI").innerHTML = sessionStorage.getItem("scoreTotalClient");
    document.getElementById("lblSR").innerHTML = sessionStorage.getItem("scoreRSRAFVP");
    document.getElementById("lblSI").innerHTML = sessionStorage.getItem("scoreImpairment");
    document.getElementById("lblSM").innerHTML = sessionStorage.getItem("scoreMedicare");

};

function exportCSVAssessment() { 
       
    var filename = createFilename() + ".csv";

    var csvObj = activeAssessment.createCSVExport();
    var exportFile = new File([csvObj], filename, {type: "text/plain;charset=utf-8"});
    saveAs(exportFile);

};

function exportPDFAssessment() { 

    var filename = createFilename() + ".pdf";

    printJS({
        documentTitle: filename,
        printable: 'formExport', type: 'html',
        documentTitle: filename
    });
};

function saveAssessment() { 
    
    var filename = createFilename() + ".json";
    var jsonObj = JSON.stringify(activeAssessment.createJSONExport());
    var exportFile = new File([jsonObj], filename, {type: "text/plain;charset=utf-8"});
    saveAs(exportFile);
};

function createFilename() {
    
    //  Use Assessment date, therapist, client ref and assessment type for filename

    var datename = new Date(sessionStorage.getItem("sessionAssessDate"));
    var datenameString = datename.getFullYear() +"." + datename.getMonth() + "." + datename.getDate();

    var therapist = activeAssessment.therapist;
    var client = activeAssessment.clientRef;
    var type = activeAssessment.type;

    if ( therapist == "") {
        therapist = "therapist";
    }
    if (client == "") {
        client = "clientReference";
    }

    var filename = (datenameString + "_" + therapist + "_" + client + "_" + type);
    
    return filename;
    
};