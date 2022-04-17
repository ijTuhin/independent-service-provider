// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDetjDRSeN_OyyCJKCN6lcDF6mljDFBdSc",
  authDomain: "catering-service-provider.firebaseapp.com",
  projectId: "catering-service-provider",
  storageBucket: "catering-service-provider.appspot.com",
  messagingSenderId: "280058586096",
  appId: "1:280058586096:web:87c91789a8884c857af335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;