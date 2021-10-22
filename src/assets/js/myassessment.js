//  Global Variables
var activeAssessment = new Assessment;

//  Open first tab by default
window.onload = document.getElementById("tabInfo").click();

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
document.getElementById("buttonConfirmReset").addEventListener("click", resetAssessment);
document.getElementById("btnExport").addEventListener("click", exportAssessment);
document.getElementById("btnSave").addEventListener("click", saveAssessment);
 
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
    activeAssessment.date = document.getElementById("fldAssessDate").value;
};

function assessmentType() { 
    activeAssessment.type = document.getElementById("fldAssessType").value;
    console.log("this.type = " + activeAssessment.type);
    console.log("field = " + document.getElementById("fldAssessType").value);
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
    document.getElementById("scoreTotalUncalc").value = activeAssessment.scoreTotalUncalcd;
    document.getElementById("scoreTotalAdjust").value = activeAssessment.scoreTotalAdjd;
    document.getElementById("scoreTotalClient").value = activeAssessment.scoreTotalClient;
    document.getElementById("scoreRSRAFVP").value = activeAssessment.scoreRSRAFVP;
    document.getElementById("scoreImpairment").value = activeAssessment.scoreImpairment;
    document.getElementById("scoreGCode").value = activeAssessment.scoreMedicare;
};

function resetAssessment() { 
    activeAssessment = new Assessment;
    location.reload();
    return false;
};

function saveAssessment() { 
    console.log("clicked save")
};

function exportAssessment() { 
    activeAssessment.exportFile();
    // activeAssessment.exportConsole();
};
