
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB_XpSAWFpvuvx_u7GNoiF34lCtMx-duKo",
      authDomain: "letschatwebapp-40bc6.firebaseapp.com",
      projectId: "letschatwebapp-40bc6",
      storageBucket: "letschatwebapp-40bc6.appspot.com",
      messagingSenderId: "336579391092",
      appId: "1:336579391092:web:185be1dc9c059461252b21"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
