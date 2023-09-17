import { useEffect } from "react"

export default function Register(props){

  const { formHandler, emailInput, passwordInput, text, usernameInput } = props

  return (
      <form onSubmit={formHandler}>
            <input 
              type="name"
              name="name"
              placeholder="username"
              required
              ref={usernameInput}
          />
          <input 
              type="email"
              name="email"
              placeholder="email"
              required
              ref={emailInput}
          
          />
          <input 
              type="password"
              name="password"
              placeholder="password"
              required
              ref={passwordInput}
          />
          <button>{text}</button>
      </form>
  )

}