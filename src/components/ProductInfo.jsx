import React from 'react'
import btCart from '@icons/btAddToCart.svg'
import '@styles/components/ProductInfo.scss'

const ProductInfo = () => {
  return (
    <div>
      <img src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="bagpack" />
      <div classname="points">
        <li classname="active">
        </li><li>
        </li><li>
        </li>
      </div>
      <div className="productInfo">
        <p> $120 </p>
        <p> Bagpack </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <button className="primaryButton AddToCartButton">
          <img src={btCart} alt="addToCart" /> Add to cart
        </button>
      </div>
    </div>



    
  )
}

export default ProductInfo