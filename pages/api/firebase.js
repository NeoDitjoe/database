import EmailAndPassword, { app , googleSignIn, githubSignIn} from "@/Config/firebase"
import { useRouter } from "next/router"
import { useEffect } from "react"
import LoginWithEmailAndPassword from "@/Config/loginfirebaseEmail"
import { useState } from "react"

export default function FirebaseAuth(){

    const router  = useRouter()
    const [ isRegistered, setIsRegistered ] = useState(true)

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(!token){
            router.push('/')
        }
    })

    return (
        <>
            {
                isRegistered ?  <EmailAndPassword /> :

                <LoginWithEmailAndPassword/>
            }

            {isRegistered ? 'have an account ? ' : "Don't have an account ? "}
            <button onClick={() => setIsRegistered(!isRegistered)}>{ isRegistered ? 'Login' : 'Sign up'}</button>

            <br></br>
            <br></br>
            <button onClick={githubSignIn}>Github</button>
            <button onClick={googleSignIn}>Google</button>
        
        </>
    )
}
