import React from 'react'
import styles from '../styles/components/MenuMob.module.scss'

const MenuMob = () => {
  return (
    <div className={styles.menuMob}>
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/"> All </a>
        </li>
        <li>
          <a href="/"> Clothes </a>
        </li>
        <li>
          <a href="/"> Electronics </a>
        </li>
        <li>
          <a href="/"> Furnitures </a>
        </li>
        <li>
          <a href="/"> Toys </a>
        </li>
        <li>
          <a href="/"> Others </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/"> My orders </a>
        </li>
        <li>
          <a href="/"> My account </a>
        </li>
      </ul>
      <ul className={styles.bloquEnd}>
        <li>
          <a href="/" className={styles.email}> elchicogamer117@git.com </a>
        </li>
        <li>
          <a href="/" className={styles.signOut}> Sign out </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuMob