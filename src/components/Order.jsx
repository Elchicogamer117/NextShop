import React from 'react'
import '@styles/components/Order.scss'
import arrow from '@icons/arrow.svg'

const Order = () => {
  return (
    <div className="order">
      <p>
        <span> 04.25.2021</span>
        <span> 6 articles</span>
      </p>
      <p> $560 </p>
      <img src={arrow} alt="arrow" />
    </div>
  )
}

export default Order
