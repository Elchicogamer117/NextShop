import React, { useContext, useState } from 'react'
import AppContext from 'context/AppContext'
import MenuDesk from './MenuDesk'
// import MenuMob from './MenuMob'
import ShoppingCart from 'containers/ShoppingCart'
import logo from 'assets/logos/yardSaleFull.svg'
import menus from 'assets/icons/menu.svg'
import arrow from 'assets/icons/arrow.svg'
import scart from 'assets/icons/shoppingCart.svg'
import styles from 'styles/components/Header.module.scss'

const Header = () => {
  const { state, toggleShopCart, toogleMenu } = useContext(AppContext)
  return (
    <nav className={styles.nav}>
      <img src={menus} alt="menu" className={styles.menu} onClick={() => toogleMenu()} />
      <div className={styles.navbarLeft}>
        <img src={logo} alt="logo" className={styles.logoNav}/>
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
      <div className={styles.navbarRight}>
        <ul>
          <li onClick={() => toogleMenu()} className={styles.navbarEmail}> 
            elchicogamer117@git.com
            <img src={arrow} alt="arrow" />
          </li>
          <li onClick={() => toggleShopCart()} className={styles.navbarShoppingCart}> 
            <img src={scart} alt="shoppingCart" />
            {state.cart.length > 0 ? <div> {state.cart.length > 9 ? '+9' : state.cart.length} </div> : null}
          </li>
        </ul>
      </div>
      {/* {state.menuIsOpen && <MenuMob />} */}
      {state.menuIsOpen && <MenuDesk />}
      {state.scartIsOpen && <ShoppingCart />}
    </nav>
  )
}

export default Header