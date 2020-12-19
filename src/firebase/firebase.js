import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFN0DZl_EH8YxBkvOajJOKC83a7lSQIek",
  authDomain: "shorturls-1a0e2.firebaseapp.com",
  projectId: "shorturls-1a0e2",
  storageBucket: "shorturls-1a0e2.appspot.com",
  messagingSenderId: "736151779301",
  appId: "1:736151779301:web:f60f5277a5c2f317a9210c"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
