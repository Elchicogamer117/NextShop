import React from 'react'
import Image from 'next/image'
import arrow from 'assets/icons/arrow.svg'
import styles from 'styles/components/Order.module.scss'
import '@styles/components/Order.scss'

const Order = () => {
  return (
    <div className={styles.order}>
      <p>
        <span> 04.25.2021</span>
        <span> 6 articles</span>
      </p>
      <p> $560 </p>
      <Image src={arrow} alt="arrow" />
    </div>
  )
}

export default Order
