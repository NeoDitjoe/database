import Register from "@/components/register"
import Link from "next/link"
import { useRef } from "react"
import { app } from "@/Config/firebase"
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Router, { useRouter } from "next/router"

export default function firebaseAuth(){
    const emailRef = useRef()
    const passwordRef = useRef()

    const router  = useRouter()
    
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

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

    function githubSignIn(e){
        e.preventDefault()
        signInWithPopup(auth, githubProvider)
            .then((res) => {
                router.push('/')
                console.log(res)
            })
    }

    function googleSignIn(e){
        e.preventDefault()
        signInWithPopup( auth, googleProvider )
            .then((res) => {
                router.push('/')
                console.log(res)
            })
    }

    return (
        <>
            <Register 
                formHandler = {signUp}
                emailInput = {emailRef}
                passwordInput = {passwordRef}
            />

            <button onClick={githubSignIn}>Github</button>
            <button onClick={googleSignIn}>Google</button>
            
            <Link href={'/'} >Home</Link>
        
        </>
    )
}
