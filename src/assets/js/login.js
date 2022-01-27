document.getElementById('btnSignin').addEventListener('click', EmailSignin, false);
document.getElementById('btnSignup').addEventListener('click', EmailSignup, false);
document.getElementById('btnLogout').addEventListener('click', Signout, false);
document.getElementById('linkPasswordReset').addEventListener('click', SendPasswordReset, false);

document.getElementById('btnGoogleSignin').addEventListener('click', GoogleSignin, false);
document.getElementById('btnFacebookSignin').addEventListener('click', FacebookSignin, false);
document.getElementById('btnMicrosoftSignin').addEventListener('click', MicrosoftSignin, false);


function EmailSignin() {

   var email = document.getElementById('fldEmail').value;
   var password = document.getElementById('fldPassword').value;

   // var reCAPTCHA = document.getElementById("btnSignIn").submit;

   if (!CheckEmail(email)) {
      alert("Please enter a valid email address: name@address.com");
   }

   if (CheckEmail(email) && !CheckPassword(password)) {
      alert("Please enter a valid password address: 8-15 character, 1+ lowercase letters, 1+ uppercase letters, 1+ numbers, 1+ special characters");
   }

   if (CheckEmail(email) && CheckPassword(password)) {
      
      // Sign in with email and pass.
      firebase.auth().signInWithEmailAndPassword(email, password).then(function() {

         firebase.analytics().logEvent('login_Email_PW');

                  
         // Need to reload to set username and redirect to main page
         window.location.assign('main.html');

      }).catch(function(error) {

         if (error.code != null) {
            alert(error.message);
         }
      });
   }

   // Clear fields and refresh screen
   ClearFields();
   Window.reload;
   
}


function EmailSignup() {

   var email = document.getElementById('fldEmail').value;
   var password = document.getElementById('fldPassword').value;

   if (!CheckEmail(email)) {
      alert("Please enter a valid email address");
   }

   if (CheckEmail(email) && !CheckPassword(password)) {
      alert("Please enter a valid password address: 8-15 character, 1+ lowercase letters, 1+ uppercase letters, 1+ numbers, 1+ special characters");
   }

   if (CheckEmail(email) && CheckPassword(password)) {

      // Sign up with email and pass.
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {

         alert("New user created.  Please login with your newly created username/password.");
         firebase.analytics().logEvent('signup_Email_PW');

      }).catch(function(error) {
      
         if (error.code != null) {
            alert(error.message);
         }
      });
   }

   // Clear fields and refresh screen
   ClearFields();
   Window.reload;

}

function SendPasswordReset() {

   var email = document.getElementById('fldEmail').value;

   if (!CheckEmail(email)) {
      alert("Please enter a valid email address");
   }
   else {

      firebase.auth().sendPasswordResetEmail(email).then(function() {

         alert("Email sent to reset password.  Please following the email instructions to reset your password.");
         firebase.analytics().logEvent('reset_PW');

      }).catch(function(error) {
         // An error happened.
         if (error.code != null) {
            alert(error.message);
         }
      });
   }
}

function sendEmailVerification() {
   firebase.auth().currentUser.sendEmailVerification().then(function() {
     // Email Verification sent!
     alert('Email Verification Sent!');
     firebase.analytics().logEvent('verify_Email_Sent');

   });
 }

 
function GoogleSignin() {

   var provider = new firebase.auth.GoogleAuthProvider();
   firebase.analytics().logEvent('login_Google');
   Signin(provider);
}

function FacebookSignin() {

   var provider = new firebase.auth.FacebookAuthProvider();
   //firebase.analytics().logEvent('login_Facebook');
   //Signin(provider);
   
}

function MicrosoftSignin() {

   //var provider = new firebase.auth.OAuthProvider('microsoft.com');
   //firebase.analytics().logEvent('login_Microsoft');
   // Signin(provider);
   
}


function Signin(whichProvider) {

   var provider = whichProvider;
   
   firebase.auth().signInWithPopup(provider).then((result) => {
     
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
 
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      var user = result.user;
      
      firebase.analytics().logEvent('login_Provider');
      
   }).catch((error) => {

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
   });
   
}

function ClearFields() {

   document.getElementById("fldEmail").value = "";
   document.getElementById("fldEmail").innerHTML = "";
   document.getElementById("fldPassword").value = "";
   document.getElementById("fldPassword").innerHTML = "";
   sessionStorage.setItem("loggedIn",false);
   location.reload;   
}

function Signout() {
   
   firebase.auth().signOut().then(function() {

      console.log('signout succesful');

      localStorage.removeItem("userName");
      localStorage.removeItem("userUID");
      localStorage.removeItem("user");

      localStorage.setItem("userName","Guest");
      document.getElementById("fldWhoAmI").innerHTML = localStorage.userName;
      firebase.analytics().logEvent('logout');
            
   }, 
   function(error) {

      alert("Your sign out failed, please try again");  
      console.log("Error: " & error.code & "  " & error.message);
   });
}

firebase.auth().onAuthStateChanged(function(user) {   
   
   var user = firebase.auth().currentUser;

   if (user) {
      if (user.displayName != null) {
         localStorage.setItem("userName",user.displayName);
         localStorage.setItem("userUID",user.uid);
         localStorage.setItem("user",user);

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


function CheckEmail(inputText) {

   // Pattern sourced from https://emailregex.com/

   var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(inputText.match(pattern)) {
      return true;
   }
   else {
      return false;
   }
}

function CheckPassword(inputText) {
   
   // Sourced from https://www.w3resource.com/javascript/form/password-validation.php
   
   // Password is between 8-15 characters, contains at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
   
   var pattern=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
   
   if(inputText.match(pattern)) {
      return true;
   }
   else { 
      return false;
   }
} 