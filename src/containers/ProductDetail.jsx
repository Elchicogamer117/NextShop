import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import close from '@icons/btClose.svg';
import '@styles/containers/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside className="productDetail">
      <div className="productDetailClose">
        <Image src={close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
