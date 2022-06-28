import React from 'react'
import '../styles/components/MenuMob.scss'

const MenuMob = () => {
  return (
    <div className="menuMob">
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
      <ul className="bloquEnd">
        <li>
          <a href="/" className="email"> elchicogamer117@git.com </a>
        </li>
        <li>
          <a href="/" className="signOut"> Sign out </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuMob