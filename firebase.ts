// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP6UVn09ljzbEPepXdOkaEWrbY1dGIS3c",
    authDomain: "netflix-clone-77737.firebaseapp.com",
    projectId: "netflix-clone-77737",
    storageBucket: "netflix-clone-77737.appspot.com",
    messagingSenderId: "503191407660",
    appId: "1:503191407660:web:9ff5999784c9d97d1bd589"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }