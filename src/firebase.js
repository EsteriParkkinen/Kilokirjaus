 import * as firebase from "firebase/app";
 import "firebase/firestore";

  var firebaseConfig = {
    apiKey: "AIzaSyDS15BWMiYRyYLNZP6OzI1FPJCGhhIX9YI",
    authDomain: "kilokirjaus.firebaseapp.com",
    databaseURL: "https://kilokirjaus.firebaseio.com",
    projectId: "kilokirjaus",
    storageBucket: "kilokirjaus.appspot.com",
    messagingSenderId: "396252742221",
    appId: "1:396252742221:web:20355d1499dfe07fead204"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;