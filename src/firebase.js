import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFuILzkRFmKH4lPHRup7QtA8f1Z1-Hpbk",
  authDomain: "tinder-clone-react-d6af7.firebaseapp.com",
  databaseURL: "https://tinder-clone-react-d6af7.firebaseio.com",
  projectId: "tinder-clone-react-d6af7",
  storageBucket: "tinder-clone-react-d6af7.appspot.com",
  messagingSenderId: "712119835990",
  appId: "1:712119835990:web:07aadeceabc77ab87a4af7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
