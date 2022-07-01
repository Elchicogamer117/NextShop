import React from 'react'
import OrderItem from 'components/OrderItem'
import styles from 'styles/pages/MyOrder.module.scss'

const MyOrder = () => {
  return (
    <div className={styles.myOrder}>

      <div className={styles.myOrderContainer}>
        <h1 className={styles.title}> My order</h1>

        <div className={styles.myOrderContent}>
          <div className={styles.order}>
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