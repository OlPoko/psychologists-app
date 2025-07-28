import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZipDCk2Uy7xBIx9xt7UuDbtmINR6Sw4A",
  authDomain: "psychologists-app-48ff8.firebaseapp.com",
  databaseURL:
    "https://psychologists-app-48ff8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-app-48ff8",
  storageBucket: "psychologists-app-48ff8.firebasestorage.app",
  messagingSenderId: "917345246577",
  appId: "1:917345246577:web:419d4d56e838b6e4f7aad0",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getDatabase(app);
