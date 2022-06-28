import React, { useContext } from 'react'
import AppContext from 'context/AppContext'
import ShoppingCartItem from 'components/ShoppingCartItem'
import arrow from 'assets/icons/arrow.svg'
import styles from 'styles/containers/ShoppingCart.module.scss'

const ShoppingCart = ({ toggleShopCart, setToggleShopCart }) => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    return state.cart.reduce((accu, currVal) => accu + currVal.price, 0)
  }

  return (
  <aside className={styles.ShoppingCart}>
    <div className="titleContainer">
      <img src={arrow} alt="arrow" onClick={() => setToggleShopCart(!toggleShopCart)}/>
      <p> Shooping cart </p>
    </div>
    <div className="myOrderContent">
      { state.cart.map((product,index) => {
        return <ShoppingCartItem product={product} key={index} indexValue={index} />
      }) }
    </div>
    <div className="order">
        <p>
          <span> Total </span>
        </p>
        <p> ${sumTotal()}  </p>
      </div>
    <button className="primaryButton">
        Checkout
      </button>
  </aside>
  )
}

export default ShoppingCart
