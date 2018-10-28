  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7X0AamL2uYhRwkKoz6Azei2zATy-NQEI",
    authDomain: "project-manager-dev.firebaseapp.com",
    databaseURL: "https://project-manager-dev.firebaseio.com",
    projectId: "project-manager-dev",
    storageBucket: "",
    messagingSenderId: "630199868130"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;