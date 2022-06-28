import React from 'react'
import '@styles/pages/MyAccount.scss'

const MyAccount = () => {
  return (
    <div className="myAccount">
      <div className="myAccountContainer">
        <h1 className="title"> My account </h1>

        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label"> Name </label>
            <p className="value"> Cristian Flores </p>
            <label htmlFor="email" className="label"> Email address </label>
            <p className="value"> elchicogamer117@git.com</p>
            <label htmlFor="password" className="label"> Password </label>
            <p className="value"> ********** </p>
          </div>
          <input type="submit" value="Edit" className="secondaryButton loginButton" />
        </form>

      </div>
    </div>
  )
}

export default MyAccount