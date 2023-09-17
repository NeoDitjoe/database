import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7lTymxbxVPJGTz2U2WRu0qAhsMmJxe7k",
  authDomain: "todoapp-5c0c7.firebaseapp.com",
  databaseURL: "https://todoapp-5c0c7-default-rtdb.firebaseio.com",
  projectId: "todoapp-5c0c7",
  storageBucket: "todoapp-5c0c7.appspot.com",
  messagingSenderId: "753766967003",
  appId: "1:753766967003:web:00d14207c7b2cf04054efe"
};

export const app = initializeApp(firebaseConfig);
