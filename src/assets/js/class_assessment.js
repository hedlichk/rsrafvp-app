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
        this.state = "---";
        this.country = "---";
        this.therapist = "---";
        this.clientRef = "---";
        this.clientAge = 0;
        this.clientGender = "---";
        this.clientDiagnosis = "---";
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
        this.scoreMedicare = "---";

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
            this.scoreRSRAFVP = score.toFixed(0);
        }
    }
    
    scoreAssessmentImpairment() { 
    
        var score = 0;
        score = 100 - this.scoreRSRAFVP;
        this.scoreImpairment = score.toFixed(0); 
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

        var textObj = this.createTEXTExport();
        console.log(textObj);
        console.log(sessionStorage);
    }

    createTEXTExport() {

        var textObj = "";
        var infoSection = "";
        var qAndASection = "";
        var scoreSection = "";

        infoSection += ("----- Information Section ----------------------------------------------------------------------------" + "\n\n")
        infoSection += ("Assessment Date    : " + this.date + "\n");
        infoSection += ("Assessment Type    : " + this.type + "\n");
        infoSection += ("Therapist          : " + this.therapist + "\n");
        infoSection += ("Client Reference   : " + this.clientRef + "\n");
        infoSection += ("Assessment State   : " + this.state + "\n");
        infoSection += ("Assessment Country : " + this.country + "\n");
        infoSection += ("Client Age         : " + this.clientAge + "\n");
        infoSection += ("Client Gender      : " + this.clientGender + "\n");
        infoSection += ("Client Diagnosis   : " + this.clientDiagnosis + "\n");
        infoSection += "\n";

        qAndASection += ("----- Questions & Answers Section --------------------------------------------------------------------" + "\n\n")
        qAndASection += ("----- " + this.headings[1] + "-----" + "\n");
        qAndASection += (this.questions[1] + ": " + this.answers[1] + "\n");
        qAndASection += (this.questions[2] + ": " + this.answers[2] + "\n");
        qAndASection += (this.questions[3] + ": " + this.answers[3] + "\n");
        qAndASection += (this.headings[1] + " note: " + this.comments[1] + "\n\n");
        qAndASection += ("----- " + this.headings[2] + "-----" + "\n");
        qAndASection += (this.questions[4] + ": " + this.answers[4] + "\n");
        qAndASection += (this.questions[5] + ": " + this.answers[5] + "\n");
        qAndASection += (this.questions[6] + ": " + this.answers[6] + "\n");
        qAndASection += (this.questions[7] + ": " + this.answers[7] + "\n");
        qAndASection += (this.headings[2]+" note: " + this.comments[2] + "\n\n");
        qAndASection += ("----- " + this.headings[3] + "-----" + "\n");
        qAndASection += (this.questions[8] + ": " + this.answers[8] + "\n");
        qAndASection += (this.questions[9] + ": " + this.answers[9] + "\n");
        qAndASection += (this.questions[10] + ": " + this.answers[10] + "\n");
        qAndASection += (this.questions[11] + ": " + this.answers[11] + "\n");
        qAndASection += (this.questions[12] + ": " + this.answers[12] + "\n");
        qAndASection += (this.questions[13] + ": " + this.answers[13] + "\n");
        qAndASection += (this.headings[3]+" note: " + this.comments[3] + "\n\n");
        qAndASection += ("----- " + this.headings[4] + "-----" + "\n");
        qAndASection += (this.questions[14] + ": " + this.answers[14] + "\n");
        qAndASection += (this.questions[15] + ": " + this.answers[15] + "\n");
        qAndASection += (this.questions[16] + ": " + this.answers[16] + "\n");
        qAndASection += (this.headings[4]+" note: " + this.comments[4] + "\n\n");
        qAndASection += ("----- " + this.headings[5] + "-----" + "\n");
        qAndASection += (this.questions[17] + ": " + this.answers[17] + "\n");
        qAndASection += (this.questions[18] + ": " + this.answers[18] + "\n");
        qAndASection += (this.headings[5]+" note: " + this.comments[5] + "\n\n");
        qAndASection += ("----- " + this.headings[6] + "-----" + "\n");
        qAndASection += (this.questions[19] + ": " + this.answers[19] + "\n");
        qAndASection += (this.questions[20] + ": " + this.answers[20] + "\n");
        qAndASection += (this.questions[21] + ": " + this.answers[21] + "\n");
        qAndASection += (this.questions[22] + ": " + this.answers[22] + "\n");
        qAndASection += (this.headings[6]+" note: " + this.comments[6] + "\n\n");
        qAndASection += ("----- " + this.headings[7] + "-----" + "\n");
        qAndASection += (this.questions[23] + ": " + this.answers[23] + "\n");
        qAndASection += (this.questions[24] + ": " + this.answers[24] + "\n");
        qAndASection += (this.questions[25] + ": " + this.answers[25] + "\n");
        qAndASection += (this.headings[7]+" note: " + this.comments[7] + "\n\n");
        qAndASection += ("----- " + this.headings[8] + "-----" + "\n");
        qAndASection += (this.questions[26] + ": " + this.answers[26] + "\n");
        qAndASection += (this.questions[27] + ": " + this.answers[27] + "\n");
        qAndASection += (this.questions[28] + ": " + this.answers[28] + "\n");
        qAndASection += (this.questions[29] + ": " + this.answers[29] + "\n");
        qAndASection += (this.headings[8]+" note: " + this.comments[8] + "\n\n");
        qAndASection += ("----- " + this.headings[9] + "-----" + "\n");
        qAndASection += (this.questions[30] + ": " + this.answers[30] + "\n");
        qAndASection += (this.questions[31] + ": " + this.answers[31] + "\n");
        qAndASection += (this.questions[32] + ": " + this.answers[32] + "\n");
        qAndASection += (this.questions[33] + ": " + this.answers[33] + "\n");
        qAndASection += (this.headings[9]+" note: " + this.comments[9] + "\n\n");

        scoreSection += ("----- Scores Section ---------------------------------------------------------------------------------" + "\n\n")
        scoreSection += ("Total questions marked NA: " + this.scoreTotalNA + "\n");
        scoreSection += ("Total uncalculated points: " + this.scoreTotalUncalcd + "\n");
        scoreSection += ("Total adjusted points    : " + this.scoreTotalAdjd + "\n");
        scoreSection += ("Total client points      : " + this.scoreTotalClient + "\n");
        scoreSection += ("R-SRAFVP score           : " + this.scoreRSRAFVP + "\n");
        scoreSection += ("% Impairment             : " + this.scoreImpairment + "%" + "\n");
        scoreSection += ("Medicare G Code          : " + this.scoreMedicare + "\n");
        scoreSection += (this.headings[10]+ " note   : " + this.comments[10] + "\n");
        scoreSection += "\n";

        textObj += infoSection;
        textObj += qAndASection;
        textObj += scoreSection;
        
        return textObj;
    }

    createJSONExport() {

        var jsonObj = new Object();

        jsonObj = { 
            "Assessment" : [ {
        
                "Date" : this.date,
                "Type" : this.type,
                "Therapist" : this.therapist,
                "ClientRef" : this.clientRef,
                "State" : this.state,
                "Country" : this.country,
                "Age" : this.clientAge,
                "Gender" : this.clientGender,
                "Diagnosis" : this.clientDiagnosis,
                "Heading1" : this.headings[1],
                "Question1" : this.questions[1],
                "Question2" : this.questions[2],
                "Question3" : this.questions[3],
                "Answer1" : this.answers[1],
                "Answer2" : this.answers[2],
                "Answer3" : this.answers[3],
                "Comment1" : this.comments[1],
                "Heading2" : this.headings[2],
                "Question4" : this.questions[4],
                "Question5" : this.questions[5],
                "Question6" : this.questions[6],
                "Question7" : this.questions[7],
                "Answer4" : this.answers[4],
                "Answer5" : this.answers[5],
                "Answer6" : this.answers[6],
                "Answer7" : this.answers[7],
                "Comment2" : this.comments[2],
                "Heading3" : this.headings[3],
                "Question8" : this.questions[8],
                "Question9" : this.questions[9],
                "Question10" : this.questions[10],
                "Question11" : this.questions[11],
                "Question12" : this.questions[12],
                "Question13" : this.questions[13],
                "Answer8" : this.answers[8],
                "Answer9" : this.answers[9],
                "Answer10" : this.answers[10],
                "Answer11" : this.answers[11],
                "Answer12" : this.answers[12],
                "Answer13" : this.answers[13],
                "Comment3" : this.comments[3],
                "Heading4" : this.headings[4],
                "Question14" : this.questions[14],
                "Question15" : this.questions[15],
                "Question16" : this.questions[16],
                "Answer14" : this.answers[14],
                "Answer15" : this.answers[15],
                "Answer16" : this.answers[16],
                "Comment4" : this.comments[4],
                "Heading5" : this.headings[5],
                "Question17" : this.questions[17],
                "Question18" : this.questions[18],
                "Answer17" : this.answers[17],
                "Answer18" : this.answers[18],
                "Comment5" : this.comments[5],
                "Heading6" : this.headings[6],
                "Question19" : this.questions[19],
                "Question20" : this.questions[20],
                "Question21" : this.questions[21],
                "Question22" : this.questions[22],
                "Answer19" : this.answers[19],
                "Answer20" : this.answers[20],
                "Answer21" : this.answers[21],
                "Answer22" : this.answers[22],
                "Comment6" : this.comments[6],
                "Heading7" : this.headings[7],
                "Question23" : this.questions[23],
                "Question24" : this.questions[24],
                "Question25" : this.questions[25],
                "Answer23" : this.answers[23],
                "Answer24" : this.answers[24],
                "Answer25" : this.answers[25],
                "Comment7" : this.comments[7],
                "Heading8" : this.headings[8],
                "Question26" : this.questions[26],
                "Question27" : this.questions[27],
                "Question28" : this.questions[28],
                "Question29" : this.questions[29],
                "Answer26" : this.answers[26],
                "Answer27" : this.answers[27],
                "Answer28" : this.answers[28],
                "Answer29" : this.answers[29],
                "Comment8" : this.comments[8],
                "Heading9" : this.headings[9],
                "Question30" : this.questions[30],
                "Question31" : this.questions[31],
                "Question32" : this.questions[32],
                "Question33" : this.questions[33],
                "Answer30" : this.answers[30],
                "Answer31" : this.answers[31],
                "Answer32" : this.answers[32],
                "Answer33" : this.answers[33],
                "Comment9" : this.comments[9],
                "Heading10" : this.headings[10],
                "ScoreTotalNA" : this.scoreTotalNA,
                "ScoreTotalUncalcd" : this.scoreTotalUncalcd,
                "ScoreTotalAdjusted" : this.scoreTotalAdjd,
                "ScoreTotalClient" : this.scoreTotalClient,
                "ScoreRSRAFVP" : this.scoreRSRAFVP,
                "ScoreImpairment" : this.scoreImpairment,
                "ScoreMedicare" : this.scoreMedicare,
                "Comment10" : this.comments[10]
            }]
        }; 

        return jsonObj;
    }

    createCSVExport() {
        
        var csvObj = "";
        
        var header = ["Fields","Values"];

        var infoSection = [
            ["Assessment Date", this.date], 
            ["Assessment Type", this.type],
            ["Therapist", this.therapist],
            ["Client Reference", this.clientRef],
            ["Assessment State", this.state],
            ["Assessment Country", this.country],
            ["Client Age", this.clientAge],
            ["Client Gender", this.clientGender],
            ["Client Diagnosis", "\"" + this.clientDiagnosis + "\""]
        ];
                  
        var qAndASection = [
            ["Heading", "\"" + this.headings[1] + "\""],
            ["\"" + this.questions[1] + "\"", this.answers[1]],
            ["\"" + this.questions[2] + "\"", this.answers[2]],
            ["\"" + this.questions[3] + "\"", this.answers[3]],
            ["\"" + this.headings[1] + "\" Notes", "\"" + this.comments[1] + "\""],
            ["Heading", "\"" + this.headings[2] + "\""],
            ["\"" + this.questions[4] + "\"", this.answers[4]],
            ["\"" + this.questions[5] + "\"", this.answers[5]],
            ["\"" + this.questions[6] + "\"", this.answers[6]],
            ["\"" + this.questions[7] + "\"", this.answers[7]],
            ["\"" + this.headings[2] + "\" Notes", "\"" + this.comments[2] + "\""],
            ["Heading", "\"" + this.headings[3] + "\""],
            ["\"" + this.questions[8] + "\"", this.answers[8]],
            ["\"" + this.questions[9] + "\"", this.answers[9]],
            ["\"" + this.questions[10] + "\"", this.answers[10]],
            ["\"" + this.questions[11] + "\"", this.answers[11]],
            ["\"" + this.questions[12] + "\"", this.answers[12]],
            ["\"" + this.questions[13] + "\"", this.answers[13]],
            ["\"" + this.headings[3] + "\" Notes", "\"" + this.comments[3] + "\""],
            ["Heading", "\"" + this.headings[4] + "\""],
            ["\"" + this.questions[14] + "\"", this.answers[14]],
            ["\"" + this.questions[15] + "\"", this.answers[15]],
            ["\"" + this.questions[16] + "\"", this.answers[16]],
            ["\"" + this.headings[4] + "\" Notes", "\"" + this.comments[4] + "\""],
            ["Heading", "\"" + this.headings[5] + "\""],
            ["\"" + this.questions[17], this.answers[17]],
            ["\"" + this.questions[18], this.answers[18]],
            ["\"" + this.headings[5] + "\" Notes", "\"" + this.comments[5] + "\""],
            ["Heading", "\"" + this.headings[6] + "\""],
            ["\"" + this.questions[19], this.answers[19]],
            ["\"" + this.questions[20], this.answers[20]],
            ["\"" + this.questions[21], this.answers[21]],
            ["\"" + this.questions[22], this.answers[22]],
            ["\"" + this.headings[6] + "\" Notes", "\"" + this.comments[6] + "\""],
            ["Heading", "\"" + this.headings[7] + "\""],
            ["\"" + this.questions[23], this.answers[23]],
            ["\"" + this.questions[24], this.answers[24]],
            ["\"" + this.questions[25], this.answers[25]],
            ["\"" + this.headings[7] + "\" Notes", "\"" + this.comments[7] + "\""],
            ["Heading", "\"" + this.headings[8] + "\""],
            ["\"" + this.questions[26], this.answers[26]],
            ["\"" + this.questions[27], this.answers[27]],
            ["\"" + this.questions[28], this.answers[28]],
            ["\"" + this.questions[29], this.answers[29]],
            ["\"" + this.headings[8] + "\" Notes", "\"" + this.comments[8] + "\""],
            ["Heading", "\"" + this.headings[9] + "\""],
            ["\"" + this.questions[30], this.answers[30]],
            ["\"" + this.questions[31], this.answers[31]],
            ["\"" + this.questions[32], this.answers[32]],
            ["\"" + this.questions[33], this.answers[33]],
            ["\"" + this.headings[9] + "\" Notes", "\"" + this.comments[9] + "\""],
        ];

        var scoresSection = [
            ["Heading", "\"" + this.headings[10] + "\""],
            ["Score Total Uncalculated", this.scoreTotalUncalcd],
            ["Score Total Adjusted Points", this.scoreTotalAdjd],
            ["Score Total Client Points", this.scoreTotalClient],
            ["Score RSRAFVP", this.scoreRSRAFVP],
            ["Score Impairment", this.scoreImpairment],
            ["Score Medicare", this.scoreMedicare],
            ["\"" + this.headings[10] + "\" Notes", "\"" + this.comments[10] + "\""]
        ];

        //  Create the combined output        
        csvObj += header + "\n";

        infoSection.forEach(function(row) {  
            csvObj += row.join(',');  
            csvObj += "\n";  
        });  

        qAndASection.forEach(function(row) {  
            csvObj += row.join(',');  
            csvObj += "\n";  
        });  

        scoresSection.forEach(function(row) {  
            csvObj += row.join(',');  
            csvObj += "\n";  
        });  

        return csvObj;
    }

}
