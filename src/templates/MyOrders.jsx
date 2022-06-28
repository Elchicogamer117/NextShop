import React from 'react'
import Order from '@components/Order'
import '@styles/pages/MyOrders.scss'

const MyOrders = () => {
  return (
    <div className="myOrders">
      <div className="myOrdersContainer">
        <h1 className="title"> My order</h1>
        <div className="myOrderContent">
          <Order />
        </div>
      </div>
    </div>

  )
}

export default MyOrders