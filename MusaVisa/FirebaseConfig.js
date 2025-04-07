import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqnkK8JzQnZvdxGFXXBGMGjzfPgUbWNkU",
  authDomain: "hannunmusavisa.firebaseapp.com",
  projectId: "hannunmusavisa",
  storageBucket: "hannunmusavisa.firebasestorage.app",
  messagingSenderId: "595817971195",
  appId: "1:595817971195:web:c509c1c8699ff937461f5e",
  measurementId: "G-VZEFCT364K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getDatabase(app)

export { db, auth }