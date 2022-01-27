//document.getElementById("btnGetAssessments").addEventListener("click", getAssessments);


function getAssessments() {

    var currentUser = localStorage.getItem("userName");
    var ok = authorized(currentUser);
        
    const db = firebase.firestore();

    //  Check the user is authorized
    if (ok) {

        //testAdd();

        console.log("i am here");


        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });

        /*
        var docRef = db.collection("users").doc("QqxHmgSe2QGF5jw1ggBs");

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
*/

        //var docRef = db.collection("assessments").doc("khedlich+1234");

        //console.log("docRef: " + JSON.stringify(docRef));

        /*
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        */
        
        /*
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        */

    }

};

function authorized(username) {

    if (username == "") {
        return false;
    }
    if (username == null) {
        return false;
    }
    if (username == "Guest") {
        return false;
    }
    return true;

}

function testAdd() {

    const db = firebase.firestore();

    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    db.collection("users").add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}