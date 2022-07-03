import React from 'react';
import ProductItem from 'components/ProductItem';
import useGetProducts from 'hooks/useGetProducts';
import styles from 'styles/containers/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section>
      <div className={styles.productList}>
        {products.map(product => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
