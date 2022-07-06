import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBRWDWddDyffWcuguVl2TxPAIGeBEElNaY",
  authDomain: "uber-next-clone-443c1.firebaseapp.com",
  projectId: "uber-next-clone-443c1",
  storageBucket: "uber-next-clone-443c1.appspot.com",
  messagingSenderId: "787488422280",
  appId: "1:787488422280:web:ba988025333bb6892ba23d"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }