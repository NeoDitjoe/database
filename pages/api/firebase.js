import Register from "@/components/register"
import Link from "next/link"
import { useRef } from "react"
import EmailAndPassword, { app , googleSignIn, githubSignIn} from "@/Config/firebase"
import { useRouter } from "next/router"
import { useEffect } from "react"
import LoginWithEmailAndPassword from "@/Config/loginfirebaseEmail"

export default function FirebaseAuth(){

    const router  = useRouter()

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(!token){
            router.push('/')
        }
    })

    return (
        <>
            <EmailAndPassword />
            <LoginWithEmailAndPassword/>
            <button onClick={githubSignIn}>Github</button>
            <button onClick={googleSignIn}>Google</button>
        
        </>
    )
}
