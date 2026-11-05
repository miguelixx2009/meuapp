// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 1. Importa o Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkYxXwh8h71D1_zCZ9leGJ69QTX4-KMrQ",
  authDomain: "meuapp-b0b38.firebaseapp.com",
  projectId: "meuapp-b0b38",
  storageBucket: "meuapp-b0b38.firebasestorage.app",
  messagingSenderId: "799707048219",
  appId: "1:799707048219:web:2da03094c2689c8f074bbe",
  measurementId: "G-3HL44DNC52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Inicializa e exporta o Firestore (se precisar usar em outros arquivos)
export const db = getFirestore(app);



 