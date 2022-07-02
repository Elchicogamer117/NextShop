import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from 'context/AppContext';
import btCart from 'assets/icons/btAddToCart.svg';
import styles from 'styles/components/ProductoItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  };
  return (
    <>
      {product.images[0] !== '' ? (
        <div className={styles.productItem}>
          <Image src={product.images[0]} width={240} height={240} alt={product.category.name} />
          <div className={styles.productInfo}>
            <div>
              <p> ${product.price} </p>
              <p> {product.title} </p>
            </div>
            <figure onClick={() => handleClick(product)} onKeyPress={() => handleClick(product)} role="presentation">
              <Image src={btCart} alt="addToCart" />
            </figure>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductItem;
