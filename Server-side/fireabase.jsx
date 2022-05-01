// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA6kUaZeUIDvB5Iqqty25F0ZA_Hptphf8",
  authDomain: "cobrashot-72b86.firebaseapp.com",
  databaseURL: "https://cobrashot-72b86-default-rtdb.firebaseio.com",
  projectId: "cobrashot-72b86",
  storageBucket: "cobrashot-72b86.appspot.com",
  messagingSenderId: "241325221140",
  appId: "1:241325221140:web:4bac3ccd85965da152ce01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
export const db = getDatabase(app);