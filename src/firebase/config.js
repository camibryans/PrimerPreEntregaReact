import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs4DFeb2XoTxUwQ8RcBWUyqlla4cYW80Y",
  authDomain: "eclair-e-commerce.firebaseapp.com",
  projectId: "eclair-e-commerce",
  storageBucket: "eclair-e-commerce.appspot.com",
  messagingSenderId: "34319922232",
  appId: "1:34319922232:web:95173eded430f8de0022cd"
}

const app = initializeApp(firebaseConfig)

export const initFirebase = () => app