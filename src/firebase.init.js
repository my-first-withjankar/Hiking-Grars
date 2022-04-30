// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsdFeI5X094dHeFC5CgmhcBIazGlVHOUw",
    authDomain: "hiking-gears-518d1.firebaseapp.com",
    projectId: "hiking-gears-518d1",
    storageBucket: "hiking-gears-518d1.appspot.com",
    messagingSenderId: "408552754455",
    appId: "1:408552754455:web:ce28906127b9951d057b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;