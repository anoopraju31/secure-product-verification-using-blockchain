import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyBIH4gZn9kTqquIEnFVNLeNhGXEM5_mtLM",
  authDomain: "verify-product.firebaseapp.com",
  projectId: "verify-product",
  storageBucket: "verify-product.appspot.com",
  messagingSenderId: "1004525771589",
  appId: "1:1004525771589:web:30ab2fda7b75787e527c2c",
  measurementId: "G-S8D33Q9JH7"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
