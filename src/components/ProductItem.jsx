import React, { useContext } from 'react'
import btCart from '@icons/btAddToCart.svg'
import AppContext from '@context/AppContext'
import '@styles/components/ProductoItem.scss'

const ProductItem = ({product}) => {
  const { addToCart } = useContext(AppContext)

  const handleClick = item => {
    addToCart(item)
  }
  return (
    <>
      {product.images[0] !== "" ? (
    <div className="productItem">
      <img src={product.images[0]} alt={product.category.name} />
      <div className="productInfo">
        <div>
          <p> ${product.price} </p>
          <p> {product.title} </p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={btCart} alt="addToCart" />
        </figure>
      </div>
    </div>
    ) : (
      <></>
    )}
  </>
  )
}

export default ProductItem