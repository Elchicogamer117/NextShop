import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from 'context/AppContext';
import ShoppingCartItem from 'components/ShoppingCartItem';
import arrow from 'assets/icons/arrow.svg';
import styles from 'styles/containers/ShoppingCart.module.scss';

const ShoppingCart = () => {
  const { state, toggleShopCart } = useContext(AppContext);

  const sumTotal = () => {
    return state.cart.reduce((accu, currVal) => accu + currVal.price, 0);
  };

  return (
    <aside className={styles.shoppingCart}>
      <div className={styles.titleContainer}>
        <Image src={arrow} alt="arrow" onClick={() => toggleShopCart()} />
        <p> Shooping cart </p>
      </div>
      <div className={styles.myOrderContent}>
        {state.cart.map((product, index) => {
          return <ShoppingCartItem product={product} key={index} indexValue={index} />;
        })}
      </div>
      <div className={styles.order}>
        <p>
          <span> Total </span>
        </p>
        <p> ${sumTotal()} </p>
      </div>
      <Link href="/myorder">
        <button className={styles.primaryButton}>Checkout</button>
      </Link>
    </aside>
  );
};

export default ShoppingCart;
