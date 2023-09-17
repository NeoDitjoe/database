import Register from "@/components/register"
import Link from "next/link"
import { useRef } from "react"
import { app } from "@/Config/firebase"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Router, { useRouter } from "next/router"

export default function firebaseAuth(){
    const emailRef = useRef()
    const passwordRef = useRef()

    const router  = useRouter()
    
    const auth = getAuth()

    function signUp(e) {
        e.preventDefault()
        const emailValue = emailRef.current.value
        const passwordValue = passwordRef.current.value

        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(() => {
                router.push('/')
                console.log([emailValue, passwordValue])
            })
    }

    function formHandler(e){
        e.preventDefault()
        const emailValue = emailRef.current.value
        const passwordValue = passwordRef.current.value
        
        console.log([emailValue, passwordValue])
    }

    return (
        <>
            <Register 
                formHandler = {signUp}
                emailInput = {emailRef}
                passwordInput = {passwordRef}
            />
            
            <Link href={'/'} >Home</Link>
        
        </>
    )
}
