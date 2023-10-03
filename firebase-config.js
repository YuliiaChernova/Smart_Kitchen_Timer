// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaM0rElLpYU_LuJR1Qcz32eu59HeZif5E",
  authDomain: "smart-kitchen-timer-9143b.firebaseapp.com",
  projectId: "smart-kitchen-timer-9143b",
  storageBucket: "smart-kitchen-timer-9143b.appspot.com",
  messagingSenderId: "806763996823",
  appId: "1:806763996823:web:cade56f59e6f246ce06bd2",
  measurementId: "G-2BE649NRSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };