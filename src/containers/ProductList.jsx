import React from 'react'
import ProductItem from '@components/ProductItem'
import useGetProducts from '@hooks/useGetProducts'
import '@styles/containers/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
  const products = useGetProducts(API)
  return (
    <section>
      <div className="productList">
        {products.map(product => {
        return <ProductItem  product={product} key={product.id} />
        })}
      </div>
    </section>
  )
}

export default ProductList