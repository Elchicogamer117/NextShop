import React from 'react'
import logo from '@logos/yardSaleFull.svg'
import email from '@icons/email.svg'
import '@styles/pages/SendEmail.scss'

const SendEmail = () => {
  return (
    <div className="sendEmail">
      <div className="sendEmailContainer">
        <img src={ logo } alt="logo" className="logo" /> 
        <h1 className="title"> Email has been sent! 📧 </h1>
        <p className="subtitle"> Please check your inbox for instructions on how to reset the paswword 😃</p>

        <div className="emailImage">
          <img src={ email } alt="email" />
        </div>

        <button className="primaryButton"> Login </button>
        <p className="resend">
          <span>Didn't receive the email? </span>
          <a href="/"> Resend </a>
        </p>
      </div>
    </div>
  )
}

export default SendEmail