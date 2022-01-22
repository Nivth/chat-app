import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQZUmc1YK0z57Hz1JzdyrT5EGRHM5drK0",
  authDomain: "chat-app-nivek.firebaseapp.com",
  projectId: "chat-app-nivek",
  storageBucket: "chat-app-nivek.appspot.com",
  messagingSenderId: "591191438189",
  appId: "1:591191438189:web:673b0317212dee6e02a064",
  measurementId: "G-3NNCJF0TD6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
