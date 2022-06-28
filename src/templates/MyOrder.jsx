import React from 'react'
import OrderItem from '@components/OrderItem'
import '@styles/pages/MyOrder.scss'

const MyOrder = () => {
  return (
    <div className="myOrder">

      <div className="myOrderContainer">
        <h1 className="title"> My order</h1>

        <div className="myOrderContent">
          <div className="order">
            <p>
              <span> 04.25.2021</span>
              <span> 6 articles</span>
            </p>
            <p> $560 </p>
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  )
}

export default MyOrder