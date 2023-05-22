// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB--jXbfVLFksjCKttwdUUt9jNqepqgCEM",
    authDomain: "music-vue-451d6.firebaseapp.com",
    projectId: "music-vue-451d6",
    storageBucket: "music-vue-451d6.appspot.com",
    appId: "1:487520233730:web:5e26de1b369064388eba1b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");
const usersCollection = db.collection("users");
export { auth, db, usersCollection, storage, songsCollection, commentsCollection };
