// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTkwkuyND_MbLQ2aEnUnEJf-WeHxP8qI",
  authDomain: "courseapp-2422c.firebaseapp.com",
  projectId: "courseapp-2422c",
  storageBucket: "courseapp-2422c.appspot.com",
  messagingSenderId: "430638058962",
  appId: "1:430638058962:web:7f62f9761b1d815da48c0b",
  measurementId: "G-1WBVYYJLYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);