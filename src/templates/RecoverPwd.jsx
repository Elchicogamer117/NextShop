import React from 'react'
import logo from '@logos/yardSaleFull.svg'
import '@styles/pages/RecoverPwd.scss'

const RecoverPwd = () => {
  return (
    <div className="recoverPwd">
    <div className="recoverPwdContainer">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Password recovery</h1>
      <p className="subtitle">Inform the email address used to create your account</p>

      <form action="/" className="form">
        <label htmlFor="email" className="label">Email address</label>
        <input type="text" id="email" className="input inputEmail" />
        <input type="submit" value="Confirm" className="primaryButton loginButton" />
      </form>

    </div>
  </div>
  )
}

export default RecoverPwd