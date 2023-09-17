import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Register from "@/components/register"
import { useRef } from "react"

export default function LoginWithEmailAndPassword(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const auth = getAuth()
  
    function login(e) {
      e.preventDefault()
      const emailValue = emailRef.current.value
      const passwordValue = passwordRef.current.value
  
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((res) => {
              sessionStorage.setItem("Token", res.user.accessToken);
              sessionStorage.setItem("userEmail", res.user.email);
              alert('welcome ' + res.user.email)
              console.log(res.user)
          })
    }
  
    return (
      <Register 
        formHandler = {login}
        emailInput = {emailRef}
        passwordInput = {passwordRef}
        text = 'Login'
      />
    )
  }