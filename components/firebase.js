import * as firebase from 'firebase';
import 'firebase/auth';
var firebaseConfig = {
   apiKey: "AIzaSyASY3JM0JBkWCw9GL2LEpQ7CLk3obehm3M",
   authDomain: "dte-auth.firebaseapp.com",
   databaseURL: "https://dte-auth.firebaseio.com",
   projectId: "dte-auth",
   storageBucket: "dte-auth.appspot.com",
   messagingSenderId: "764751734771",
   appId: "1:764751734771:web:e7f0cd8228dd98efacd486",
   measurementId: "G-NCGNSV0LMB"
 };
firebase.initializeApp(firebaseConfig);
 var database = firebase.database();
 export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
