// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCkVKX2UzxWZun_ScxvuslyTxfsfRf5UNs",
//   authDomain: "foodi-store-971e0.firebaseapp.com",
//   projectId: "foodi-store-971e0",
//   storageBucket: "foodi-store-971e0.appspot.com",
//   messagingSenderId: "623121877043",
//   appId: "1:623121877043:web:20e79028507b69f36f3b46",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
