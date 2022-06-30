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
  const { state: {cart, scartIsOpen, menuIsOpen, menuIsOpenMob}, toggleShopCart, toogleMenuDesk, toogleMenuMob  } = useContext(AppContext)
  return (
    <nav className={styles.nav}>
      <img src={menus} alt="menu" className={styles.menu} onClick={() => toogleMenuMob()} />
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
          <li onClick={() => toogleMenuDesk()} className={styles.navbarEmail}> 
            elchicogamer117@git.com
            <img src={arrow} alt="arrow" />
          </li>
          <li onClick={() => toggleShopCart()} className={styles.navbarShoppingCart}> 
            <img src={scart} alt="shoppingCart" />
            {scart.length > 0 ? <div> {cart.length > 9 ? '+9' : cart.length} </div> : null}
          </li>
        </ul>
      </div>
      {menuIsOpenMob && <MenuMob />}
      {menuIsOpen && <MenuDesk />}
      {scartIsOpen && <ShoppingCart />}
    </nav>
  )
}

export default Header