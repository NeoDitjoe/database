import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import FirebaseAuth from './api/firebase'

export default function App({ Component, pageProps }) {

  const [ token, setToken ] = useState()

  useEffect(() => {
     setToken(sessionStorage.getItem('Token'))
  })

  if (!token){
    return <FirebaseAuth />
  }


  return <Component {...pageProps} />
}