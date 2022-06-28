import React from 'react'
import littleHalo from '@images/notFound.png'
import '@styles/pages/NotFound.css'

const NotFound = () => {
  return (
    <div className="notFound">
      <section className="card">
        <div> 404 </div>
        <div> Not Found </div>
        <img src={littleHalo} alt="errorImage" />
      </section>
    </div>
  )
}

export default NotFound