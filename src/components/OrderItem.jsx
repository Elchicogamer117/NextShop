import React from 'react'
import '@styles/components/OrderItem.scss'

const OrderItem = () => {
  return (
    <div className="orderItem">        
      <figure>
        <img src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt />
      </figure>
      <p> $120 </p>
      <p> Bagpack </p>
    </div>
  )
}

export default OrderItem