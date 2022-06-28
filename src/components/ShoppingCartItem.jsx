import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import close from '@icons/btClose.svg'
import '@styles/components/ShoppingCartItem.scss'

const ShoppingCartItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext)

  const handleRemove = product => {
    removeFromCart(product)
  }

  return (
    <div className="shoopingCardItem">        
      <figure>
        <img src={product.images[0]} alt={product.category.name} />                
      </figure>
      <p> {product.title} </p>
      <p> ${product.price} </p>
      <img src={close} alt="close" onClick={() => handleRemove(indexValue)}/>
    </div>
  )
}

export default ShoppingCartItem
