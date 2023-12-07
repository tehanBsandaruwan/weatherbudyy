// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAb-RvMxT9X13c_z5WhIHUGpMbLhwT-Sxo",
  authDomain: "weatherbuddy-52a7a.firebaseapp.com",
  projectId: "weatherbuddy-52a7a",
  storageBucket: "weatherbuddy-52a7a.appspot.com",
  messagingSenderId: "335157599757",
  appId: "1:335157599757:web:177d68c18b6467150dff44",
  measurementId: "G-3CD3132E0C"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
