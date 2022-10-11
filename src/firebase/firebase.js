import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNvEBIgN6JdSlwf0x9jlXLGhb-Xq8wwY0",
  authDomain: "netflix-clone-236e6.firebaseapp.com",
  projectId: "netflix-clone-236e6",
  storageBucket: "netflix-clone-236e6.appspot.com",
  messagingSenderId: "522779167123",
  appId: "1:522779167123:web:9ee519a652213823824066"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db