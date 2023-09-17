import Register from "@/components/register";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, 
  GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useRef } from "react";

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

const auth = getAuth()

//google
const googleProvider = new GoogleAuthProvider()

export function googleSignIn(e){
  e.preventDefault()
  signInWithPopup( auth, googleProvider )
      .then((res) => {
          sessionStorage.setItem("Token", res.user.accessToken);
          sessionStorage.setItem("userEmail", res.user.displayName);
      })
}

//github
const githubProvider = new GithubAuthProvider()

export function githubSignIn(e){
  e.preventDefault()
  signInWithPopup(auth, githubProvider)
      .then((res) => {
          sessionStorage.setItem("Token", res.user.accessToken);
          sessionStorage.setItem("userEmail", res.user.email[0].toLocaleUpperCase() +  res.user.email.slice(1).split('@')[0]);
      })
}

//sign out

export function Logout(){
  signOut(auth)
    .then(() => {
      alert('logged out')

  }).catch((error) => {
    alert(error)
  });
}

//email and password
export default function EmailAndPassword(){

  const emailRef = useRef()
  const passwordRef = useRef()

  function signUp(e) {
    e.preventDefault()
    const emailValue = emailRef.current.value
    const passwordValue = passwordRef.current.value

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((res) => {
            sessionStorage.setItem("Token", res.user.accessToken);
            sessionStorage.setItem("userEmail", res.user.email);
            alert('welcome ' + res.user.email)
            console.log(res.user)
        })
  }

  return (
    <Register 
      formHandler = {signUp}
      emailInput = {emailRef}
      passwordInput = {passwordRef}
      text = 'Sign up'

    />
  )
}