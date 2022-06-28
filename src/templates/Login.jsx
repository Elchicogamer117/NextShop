import React, { useRef } from 'react'
import logo from '@logos/yardSaleFull.svg'
import '@styles/pages/Login.scss'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const data = {
      username: formData.get("email"),
      password: formData.get("password")
    }
    console.log(data)
  }
  return (
    <div className="login">
      <div className="loginContainer">
        <img src={logo} alt="logo" className="logo" /> 

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label"> Email address </label>
          <input type="text" id="email" name="email" placeholder="elchicogamer117@git.com" className="input inputEmail" />
          <label htmlFor="Password" className="label"> Password </label>
          <input type="password" id="password" name="password" placeholder="**********" className="input inputPwd" />
          <input type="button" defaultValue="Log in" className="primaryButton loginButton" onClick={handleSubmit}/>
          <a href="/"> Forgot my password </a>
          <button type='button' className="secondaryButton signUpButton"> Sign up </button>
        </form>

      </div>
    </div>
  )
}

export default Login