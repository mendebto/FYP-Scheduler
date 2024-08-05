// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAh7kTdnz-3gEzNk2GstrZKRvvxiWWW2Pk",
  authDomain: "fypdb-da839.firebaseapp.com",
  projectId: "fypdb-da839",
  storageBucket: "fypdb-da839.appspot.com",
  messagingSenderId: "507824952906",
  appId: "1:507824952906:web:d161cfc48112bf111f38b3",
  measurementId: "G-1GLKW3SKKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const minTime = new Date();
minTime.setHours = (9,0,0);
export const maxTime = new Date();
maxTime.setHours = (18,0,0); 
export const eventDefault= {

}
//const analytics = getAnalytics(app);