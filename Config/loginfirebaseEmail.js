import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Register from "@/components/register"
import { useRef } from "react"

export default function LoginWithEmailAndPassword(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()
    const auth = getAuth()
  
    function login(e) {
      e.preventDefault()
      const emailValue = emailRef.current.value
      const passwordValue = passwordRef.current.value
      const usernameValue = usernameRef.current.value
  
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((res) => {
              sessionStorage.setItem("Token", res.user.accessToken);
              sessionStorage.setItem("user", usernameValue);
              alert('welcome ' + sessionStorage.getItem("user"))
              console.log(sessionStorage.getItem("user"))
          })
    }
  
    return (
      <Register 
        formHandler = {login}
        emailInput = {emailRef}
        passwordInput = {passwordRef}
        usernameInput = {usernameRef}
        text = 'Login'
      />
    )
  }