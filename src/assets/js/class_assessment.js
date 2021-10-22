class Assessment {

    date = new Date();
    type = String;
    state = String;
    country = String;
    therapist = String;
    clientRef = String;
    clientAge = Number;
    clientGender = String;
    clientDiagnosis = String;
    headings = Array[11];
    questions = Array[34];
    answers = Array[34];
    comments = Array[11];
    scoreTotalNA = Number;
    scoreTotalUncalcd = Number;
    scoreTotalAdjd = Number;
    scoreTotalClient = Number;
    scoreRSRAFVP = Number;
    scoreImpairment = Number;
    scoreMedicare = String;
		
	constructor() {
        this.date = new Date();
        this.type = "Initial";  // Selector does not set initial value
        this.state = "";
        this.country = "";
        this.therapist = "";
        this.clientRef = "";
        this.clientAge = 0;
        this.clientGender = "";
        this.clientDiagnosis = "";
        this.headings = [];
        this.questions = [];
        this.answers = [];
        this.comments = [];
        this.scoreTotalNA = 0;
        this.scoreTotalUncalcd = 0;
        this.scoreTotalAdjd = 0;
        this.scoreTotalClient = 0;
        this.scoreRSRAFVP = 0;
        this.scoreImpairment = 0;
        this.scoreMedicare = "--";

        this.initHeadings();
        this.initQuestions();
        this.initAnswers();
        this.initComments();
        
	}

    initHeadings() {
        this.headings[0] = "-- blank --";   // intentional for ease of correlation
        this.headings[1] = "Health Management";
        this.headings[2] = "Personal Grooming";
        this.headings[3] = "Meals/Laundry Preparation";
        this.headings[4] = "Financial Management";
        this.headings[5] = "Using the Telephone";
        this.headings[6] = "Reading";
        this.headings[7] = "Writing";
        this.headings[8] = "Functional Mobility";
        this.headings[9] = "Personal Preference Activities";
        this.headings[10] = "Assessment Scores";
    }

    initQuestions() {
        this.questions[0] = "-- blank --";  // intentional for ease of correlation
        this.questions[1] = "Medication set up";
        this.questions[2] = "Taking medication";
        this.questions[3] = "Obtaining supplies/food";
        this.questions[4] = "Dressing";
        this.questions[5] = "Hair care";
        this.questions[6] = "Nail care";
        this.questions[7] = "Oral care";
        this.questions[8] = "Meal Preparation-chop, slice, cut, peel foods";
        this.questions[9] = "Meal Preparation-pour/measure ingredients";
        this.questions[10] = "Meal Preparation-microwave";
        this.questions[11] = "Meal Preparation-stove burners";
        this.questions[12] = "Meal Preparation-oven";
        this.questions[13] = "Laundry Preparation";
        this.questions[14] = "Manage records";
        this.questions[15] = "Accurately read bills/financial statements";
        this.questions[16] = "Write check/money order";
        this.questions[17] = "Physically operate telephone";
        this.questions[18] = "Retrieve telephone numbers";
        this.questions[19] = "TV guide on TV";
        this.questions[20] = "Books";
        this.questions[21] = "Labels/instructions";
        this.questions[22] = "Credit/debit cards";
        this.questions[23] = "Legible personal list/short note";
        this.questions[24] = "Legibly address envelope";
        this.questions[25] = "Legible signature";
        this.questions[26] = "Ascend/descend stairs";
        this.questions[27] = "Adjusts to changes in walking surface";
        this.questions[28] = "Avoids collisions/tripping";
        this.questions[29] = "Locates and reads signs";
        this.questions[30] = "Shaving";
        this.questions[31] = "Leisure activities";
        this.questions[32] = "Operate devices used for leisure";
        this.questions[33] = "Read Timepiece";
    };

    initAnswers() {
        this.answers[0] = "-- blank --";    // intentional for ease of correlation
        for (let i = 1; i < 34; i++) {
            this.answers[i] = "na";
        }
    }

    initComments() {
        this.comments[0] = "-- blank --";
        for (let i = 1; i < 11; i++) {
            this.comments[i] = "---";
        }
    }

    scoreTotalQuestionsNA() { 

        var score = 0;
    
        for (let i = 1; i < 34; i++) {
            if (this.answers[i] == "na") {
                score = score + 1;
            }
        }
        this.scoreTotalNA = score;
    }

    scoreTotalUncalcPoints() { 

        this.scoreTotalUncalcd = this.scoreTotalNA * 4;
    }
    
    scoreTotalAdjustPoints() { 

        var score = 0;
    
        for (let i = 1; i < 34; i++) {
            if (this.answers[i] != "na") {
                score = score + 1;
            }
        }
        this.scoreTotalAdjd = score * 4;
    }
    
    scoreTotalClientPoints() { 
    
        var score = 0;
    
        for (let i = 1; i < 34; i++) {
            if (this.answers[i] != "na") {
                score += parseInt(this.answers[i]);
            }
        }
        this.scoreTotalClient = score;
    }
    
    scoreAssessmentRSRAFVP() { 

        var score = 0;

        score = ((this.scoreTotalClient / this.scoreTotalAdjd) * 100);
        if (isNaN(score)) {
            this.scoreRSRAFVP = 0;
        }
        else {
            this.scoreRSRAFVP = score.toFixed(1);
        }
    }
    
    scoreAssessmentImpairment() { 
    
        this.scoreImpairment = 100 - this.scoreRSRAFVP; 
    }

    scoreAssessmentGCode() { 
    
        var gcode = "";
    
        switch(true) {
            case (this.scoreImpairment < 1):
                gcode = "CH";
                break;
            case (this.scoreImpairment < 20):
                gcode = "CI";
                break;
            case (this.scoreImpairment < 40):
                gcode = "CJ";
                break;
            case (this.scoreImpairment < 60):
                gcode = "CK";
                break;
            case (this.scoreImpairment < 80):
                gcode = "CL";
                break;
            case (this.scoreImpairment < 100):
                gcode = "CM";
                break;
            case (this.scoreImpairment >= 100):
                gcode = "CN";
                break;
        }
        this.scoreMedicare = gcode;
    }

    exportConsole() {

        console.log("------------------------------------------------------------------------------------------------" + "\n");
        console.log("Therapist         : " + this.therapist + "\n");
        console.log("Client Reference  : " + this.clientRef + "\n");
        console.log("Assessment Date   : " + this.date + "\n");
        console.log("Assessment Type   : " + this.type + "\n");
        if (this.state != "") {
            console.log("State/Province    : " + this.state + "\n");
        }
        else {
            console.log("State/Province    : not given" + "\n");
        }
        if (this.country != "") {
            console.log("Country           : " + this.country + "\n");
        }
        else {
            console.log("Country           : not given" + "\n");
        }
        if ((this.clientAge > 0)) {
            console.log("Client's Age      : " + this.clientAge + "\n");
        }
        else {
            console.log("Client's Age      : not given" + "\n");
        }
        if (this.clientGender != "") {
            console.log("Client's Gender   : " + this.clientGender + "\n");
        }
        else {
            console.log("Client's Gender   : not given" + "\n");
        }
        
        if (this.clientDiagnosis != "") {
            console.log("Client's Diagnosis: " + this.clientDiagnosis + "\n");
        }
        else {
            console.log("Client's Diagnosis: not given" + "\n");
        }

        console.log("------------------------------------------------------------------------------------------------" + "\n");
        console.log(this.headings[1] + "------------------------------------------------" + "\n");
        console.log(this.questions[1] + ": " + this.answers[1] + "\n");
        console.log(this.questions[2] + ": " + this.answers[2] + "\n");
        console.log(this.questions[3] + ": " + this.answers[3] + "\n");
        console.log(this.headings[1] + " note: " + this.comments[1] + "\n");
        console.log(this.headings[2] + "------------------------------------------------" + "\n");
        console.log(this.questions[4] + ": " + this.answers[4] + "\n");
        console.log(this.questions[5] + ": " + this.answers[5] + "\n");
        console.log(this.questions[6] + ": " + this.answers[6] + "\n");
        console.log(this.questions[7] + ": " + this.answers[7] + "\n");
        console.log(this.headings[2]+" note: " + this.comments[2] + "\n");
        console.log(this.headings[3] + "------------------------------------------------" + "\n");
        console.log(this.questions[8] + ": " + this.answers[8] + "\n");
        console.log(this.questions[9] + ": " + this.answers[9] + "\n");
        console.log(this.questions[10] + ": " + this.answers[10] + "\n");
        console.log(this.questions[11] + ": " + this.answers[11] + "\n");
        console.log(this.questions[12] + ": " + this.answers[12] + "\n");
        console.log(this.questions[13] + ": " + this.answers[13] + "\n");
        console.log(this.headings[3]+" note: " + this.comments[3] + "\n");
        console.log(this.headings[4] + "------------------------------------------------" + "\n");
        console.log(this.questions[14] + ": " + this.answers[14] + "\n");
        console.log(this.questions[15] + ": " + this.answers[15] + "\n");
        console.log(this.questions[16] + ": " + this.answers[16] + "\n");
        console.log(this.headings[4]+" note: " + this.comments[4] + "\n");
        console.log(this.headings[5] + "------------------------------------------------" + "\n");
        console.log(this.questions[17] + ": " + this.answers[17] + "\n");
        console.log(this.questions[18] + ": " + this.answers[18] + "\n");
        console.log(this.headings[5]+" note: " + this.comments[5] + "\n");
        console.log(this.headings[6] + "------------------------------------------------" + "\n");
        console.log(this.questions[19] + ": " + this.answers[19] + "\n");
        console.log(this.questions[20] + ": " + this.answers[20] + "\n");
        console.log(this.questions[21] + ": " + this.answers[21] + "\n");
        console.log(this.questions[22] + ": " + this.answers[22] + "\n");
        console.log(this.headings[6]+" note: " + this.comments[6] + "\n");
        console.log(this.headings[7] + "------------------------------------------------" + "\n");
        console.log(this.questions[23] + ": " + this.answers[23] + "\n");
        console.log(this.questions[24] + ": " + this.answers[24] + "\n");
        console.log(this.questions[25] + ": " + this.answers[25] + "\n");
        console.log(this.headings[7]+" note: " + this.comments[7] + "\n");
        console.log(this.headings[8] + "------------------------------------------------" + "\n");
        console.log(this.questions[26] + ": " + this.answers[26] + "\n");
        console.log(this.questions[27] + ": " + this.answers[27] + "\n");
        console.log(this.questions[28] + ": " + this.answers[28] + "\n");
        console.log(this.questions[29] + ": " + this.answers[29] + "\n");
        console.log(this.headings[8]+" note: " + this.comments[8] + "\n");
        console.log(this.headings[9] + "------------------------------------------------" + "\n");
        console.log(this.questions[30] + ": " + this.answers[30] + "\n");
        console.log(this.questions[31] + ": " + this.answers[31] + "\n");
        console.log(this.questions[32] + ": " + this.answers[32] + "\n");
        console.log(this.questions[33] + ": " + this.answers[33] + "\n");
        console.log(this.headings[9]+" note: " + this.comments[9] + "\n");
        
        console.log("------------------------------------------------------------------------------------------------" + "\n");
        console.log(this.headings[10] + "------------------------------------------------" + "\n");
        console.log("Total questions marked NA: " + this.scoreTotalNA + "\n");
        console.log("Total uncalculated points: " + this.scoreTotalUncalcd + "\n");
        console.log("Total adjusted points    : " + this.scoreTotalAdjd + "\n");
        console.log("Total client points      : " + this.scoreTotalClient + "\n");
        console.log("R-SRAFVP score           : " + this.scoreRSRAFVP + "\n");
        console.log("% Impairment             : " + this.scoreImpairment + "%" + "\n");
        console.log("Medicare G Code          : " + this.scoreMedicare + "\n");
        console.log(this.headings[10]+" note   : " + this.comments[10] + "\n");
    }

    exportFile() {

         console.log("------------------------------------------------------------------------------------------------" + "\n");
        console.log("Therapist         : " + this.therapist + "\n");
        console.log("Client Reference  : " + this.clientRef + "\n");
        console.log("Assessment Date   : " + this.date + "\n");
        console.log("Assessment Type   : " + this.type + "\n");
        if (this.state != "") {
            console.log("State/Province    : " + this.state + "\n");
        }
        else {
            console.log("State/Province    : not given" + "\n");
        }
        if (this.country != "") {
            console.log("Country           : " + this.country + "\n");
        }
        else {
            console.log("Country           : not given" + "\n");
        }
        if ((this.clientAge > 0)) {
            console.log("Client's Age      : " + this.clientAge + "\n");
        }
        else {
            console.log("Client's Age      : not given" + "\n");
        }
        if (this.clientGender != "") {
            console.log("Client's Gender   : " + this.clientGender + "\n");
        }
        else {
            console.log("Client's Gender   : not given" + "\n");
        }
        
        if (this.clientDiagnosis != "") {
            console.log("Client's Diagnosis: " + this.clientDiagnosis + "\n");
        }
        else {
            console.log("Client's Diagnosis: not given" + "\n");
        }

    }
}
