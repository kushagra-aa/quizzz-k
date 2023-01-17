import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzCTgXABpfUYV1UV2jEUdz008irUZZFX8",
  authDomain: "quizzz-k.firebaseapp.com",
  databaseURL: "https://quizzz-k-default-rtdb.firebaseio.com",
  projectId: "quizzz-k",
  storageBucket: "quizzz-k.appspot.com",
  messagingSenderId: "292262499843",
  appId: "1:292262499843:web:8fb50edcb27668d5cae036",
  measurementId: "G-VV82749YK7",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
