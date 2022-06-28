import React from 'react'
import '@styles/pages/CreateAccount.scss'

const CreateAccount = () => {
  return (
    <div className="createAccount">
      <div className="createAccountContainer">
        <h1 className="title"> My account </h1>

        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label"> Name </label>
            <input type="text" id="name" placeholder="Cristian Flores" className="input inputName" />
            <label htmlFor="email" className="label"> Email address </label>
            <input type="text" id="email" placeholder="elchicogamer117@git.com" className="input inputEmail" />
            <label htmlFor="password" className="label"> Password </label>
            <input type="password" id="password" placeholder="**********" className="input inputPwd" />
          </div>
          <input type="submit" value="Create" className="primaryButton loginButton" />
        </form>

      </div>
    </div>
  )
}

export default CreateAccount