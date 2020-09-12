import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxAoHhtoPJSYzsBBHnEcf5B48fS5gADNc",
  authDomain: "clone-4ba0a.firebaseapp.com",
  databaseURL: "https://clone-4ba0a.firebaseio.com",
  projectId: "clone-4ba0a",
  storageBucket: "clone-4ba0a.appspot.com",
  messagingSenderId: "567140692891",
  appId: "1:567140692891:web:6617519f76fc64a9eee73e",
  measurementId: "G-EJXHLDNGB0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
