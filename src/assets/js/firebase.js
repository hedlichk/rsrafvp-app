
const firebaseConfig = {
    apiKey: "AIzaSyAK3s7xmED-bSlBFpLhSY7DWhPzQoBSJjI",
    authDomain: "rsrafvp-4d1cc.firebaseapp.com",
    projectId: "rsrafvp-4d1cc",
    databaseURL: "rsrafvp-4d1cc.firebaseio.com",
    storageBucket: "rsrafvp-4d1cc.appspot.com",
    messagingSenderId: "477775298850",
    appId: "1:477775298850:web:a5f779c2616958d886257b",
    measurementId: "G-5CD7Y3P4ST"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
//appCheck.activate('6Le2D04dAAAAAIL_4ehozugrNDj6pZKO6QSaFFsj',true);

firebase.analytics().logEvent('screen_view', {
    firebase_screen: document.getElementsByTagName("html")[0].getAttribute("screenname")   
});

firebase.auth().onAuthStateChanged(function(user) {   
   
  var user = firebase.auth().currentUser;

  if (user) {
     if (user.displayName != null) {
        localStorage.setItem("userName",user.displayName);
        //localStorage.setItem("userUID",user.uid);
        //localStorage.setItem("user",user);

     }
     else {
  
        // Get the name from the email
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*/;
        var name = user.email.match(pattern);
        localStorage.setItem("userName",name);
        localStorage.setItem("userUID",user.uid);
     }
  } 
  else {
     console.log("user not signed in");
  }
});