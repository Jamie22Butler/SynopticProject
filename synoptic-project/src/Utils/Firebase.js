import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDVq0s5hLsHk6d6nSx8gMp0aS69wKZXlN0",
  authDomain: "synopticproject-d3bb9.firebaseapp.com",
  projectId: "synopticproject-d3bb9",
  storageBucket: "synopticproject-d3bb9.appspot.com",
  messagingSenderId: "644298469137",
  appId: "1:644298469137:web:ca1ec137be74b30d1926b0"
};

const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);

export default firebase;