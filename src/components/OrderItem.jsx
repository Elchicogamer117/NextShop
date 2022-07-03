import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/OrderItem.module.scss';

const OrderItem = () => {
  return (
    <div className={styles.orderItem}>
      <figure>
        <Image src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%" height="100%" alt="images" />
      </figure>
      <p> $120 </p>
      <p> Bagpack </p>
    </div>
  );
};

export default OrderItem;
