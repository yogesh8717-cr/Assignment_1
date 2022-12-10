
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" ;

const firebaseConfig = {
  apiKey: "AIzaSyC9TUdgwrQS7rt53BCl0M6sfJi2OQXVpVI",
  authDomain: "react-crud-761b5.firebaseapp.com",
  projectId: "react-crud-761b5",
  storageBucket: "react-crud-761b5.appspot.com",
  messagingSenderId: "518674220192",
  appId: "1:518674220192:web:8a3d9d2ca238334541b5c5",
  measurementId: "G-EDTRP0R9BQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);