// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig={
    apiKey: "AIzaSyAA6kUaZeUIDvB5Iqqty25F0ZA_Hptphf8",
    authDomain: "cobrashot-72b86.firebaseapp.com",
    projectId: "cobrashot-72b86",
    storageBucket: "cobrashot-72b86.appspot.com",
    messagingSenderId: "241325221140",
    appId: "1:241325221140:web:4bac3ccd85965da152ce01"
}

if(!firebase.app.length){
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
}

export{firebase};

const auth = firebase.auth()
export{ auth };