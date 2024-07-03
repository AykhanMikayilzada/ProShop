// src/utils/firebase.js

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBPsCtOd2jNJslzBxLzAptLOeYQevbT_C0",
    authDomain: "proshop-f701b.firebaseapp.com",
    projectId: "proshop-f701b",
    storageBucket: "proshop-f701b.appspot.com",
    messagingSenderId: "1087575988480",
    appId: "1:1087575988480:web:46865de58632f7d29e7be5",
    measurementId: "G-NGSF9GJ0RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
