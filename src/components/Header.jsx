import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      <Image src={menus} alt="menu" className={styles.menu} onClick={() => toogleMenuMob()} />
      <div className={styles.navbarLeft}>
        <Link href='/'>
          <Image src={logo} alt="logo" className={styles.logoNav}/>
        </Link>
        <ul>
          <li>
            <Link href='/'>All</Link>
          </li>
          <li>
            <Link href='/'>Clothes</Link>
          </li>
          <li>
            <Link href='/'>Electronics</Link>
          </li>
          <li>
            <Link href='/'>Furnitures</Link>
          </li>
          <li>
            <Link href='/'>Toys</Link>
          </li>
          <li>
            <Link href='/'>Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <ul>
          <li onClick={() => toogleMenuDesk()} className={styles.navbarEmail}> 
            elchicogamer117@git.com
            <Image src={arrow} alt="arrow" />
          </li>
          <li onClick={() => toggleShopCart()} className={styles.navbarShoppingCart}> 
            <Image src={scart} alt="shoppingCart" />
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