import React from 'react';
import Image from 'next/image';
import btCart from '@icons/btAddToCart.svg';
import styles from 'styles/components/ProductInfo.modules.scss';

const ProductInfo = () => {
  return (
    <div>
      <Image src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="bagpack" />
      <div className={styles.points}>
        <li className={styles.active}></li>
        <li></li>
        <li></li>
      </div>
      <div className="productInfo">
        <p> $120 </p>
        <p> Bagpack </p>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.{' '}
        </p>
        <button className="primaryButton AddToCartButton">
          <Image src={btCart} alt="addToCart" /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
