import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from 'context/AppContext';
import close from 'assets/icons/btClose.svg';
import styles from 'styles/components/ShoppingCartItem.module.scss';

const ShoppingCartItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product);
  };

  return (
    <div className={styles.shoopingCardItem}>
      <figure>
        <Image src={product.images[0]} width={80} height={80} alt={product.category.name} />
      </figure>
      <p> {product.title} </p>
      <p> ${product.price} </p>
      <Image src={close} alt="close" className={styles.close} onClick={() => handleRemove(indexValue)} />
    </div>
  );
};

export default ShoppingCartItem;
