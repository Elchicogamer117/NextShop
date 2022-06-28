import React, { useContext, useState } from 'react'
import AppContext from 'context/AppContext'
import MenuDesk from './MenuDesk'
import MenuMob from './MenuMob'
import ShoppingCart from 'containers/ShoppingCart'
import logo from 'assets/logos/yardSaleFull.svg'
import menus from 'assets/icons/menu.svg'
import arrow from 'assets/icons/arrow.svg'
import scart from 'assets/icons/shoppingCart.svg'
import styles from 'styles/components/Header.module.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleShopCart, setToggleShopCart] = useState(false)
  const [toogleMenu, setToogleMenu] = useState(false)
  const { state: {cart} } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <nav className={styles.Nav}>
      <img src={menus} alt="menu" className="menuNav" onClick={() => setToogleMenu(!toogleMenu)} />
      <div className="navbarLeft">
        <img src={logo} alt="logo" className="logoNav" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbarRight">
        <ul>
          <li onClick={handleToggle} className="navbarEmail"> 
            elchicogamer117@git.com
            <img src={arrow} alt="arrow" />
          </li>
          <li onClick={() => setToggleShopCart(!toggleShopCart)} className="navbarShoppingCart"> 
            <img src={scart} alt="shoppingCart" />
            {cart.length > 0 ? <div> {cart.length > 9 ? '+9' : cart.length} </div> : null}
          </li>
        </ul>
      </div>
      {toogleMenu && <MenuMob />}
      {toggle && <MenuDesk />}
      {toggleShopCart && <ShoppingCart toggleShopCart={toggleShopCart} setToggleShopCart={setToggleShopCart} />}
    </nav>
  )
}

export default Header