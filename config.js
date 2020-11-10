import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCyuPH46PquxafR0UA3d_BXFGsbpbvyI_w",
  authDomain: "multiplayerproj-71bfe.firebaseapp.com",
  databaseURL: "https://multiplayerproj-71bfe.firebaseio.com",
  projectId: "multiplayerproj-71bfe",
  storageBucket: "multiplayerproj-71bfe.appspot.com",
  messagingSenderId: "29527568001",
  appId: "1:29527568001:web:bdeda424e0ae58468ca780"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
