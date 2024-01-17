// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAxpXmNXWLHQ0STfdXAougojm5ljSNovFI",
  authDomain: "ecommerce-9d0a7.firebaseapp.com",
  projectId: "ecommerce-9d0a7",
  storageBucket: "ecommerce-9d0a7.appspot.com",
  messagingSenderId: "637506462369",
  appId: "1:637506462369:web:a718133aaa1325b2ef86e0",
  measurementId: "G-FMHDD7F1LV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)