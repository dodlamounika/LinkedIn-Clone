import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBakQH4831CGW8mHmUyseSfhOBUeDajSmU",
    authDomain: "linkedin-clone-60d4b.firebaseapp.com",
    projectId: "linkedin-clone-60d4b",
    storageBucket: "linkedin-clone-60d4b.appspot.com",
    messagingSenderId: "458617439785",
    appId: "1:458617439785:web:3af244110e65f9b4d6fe38"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}
