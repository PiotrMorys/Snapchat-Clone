import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDg-XbcJlkG16VwPA88YIm4C5jB7iV7fQo",
    authDomain: "snapchat-clone-c27f5.firebaseapp.com",
    projectId: "snapchat-clone-c27f5",
    storageBucket: "snapchat-clone-c27f5.appspot.com",
    messagingSenderId: "1012005810608",
    appId: "1:1012005810608:web:2b4cbe8fdd5db608f76675"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth , storage, provider };
  