// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1nH1OOfispApSZNj68U4hD-muGnQtMRA",
  authDomain: "mini-hakthon.firebaseapp.com",
  projectId: "mini-hakthon",
  storageBucket: "mini-hakthon.appspot.com",
  messagingSenderId: "28937235941",
  appId: "1:28937235941:web:9075d9c16c8595d0cd930c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db,storage };
