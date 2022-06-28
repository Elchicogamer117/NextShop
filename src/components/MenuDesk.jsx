import React from 'react'
import '@styles/components/MenuDesk.scss'

const MenuDesk = () => {
  return (
      <div className="menuDesk">
        <ul>
          <li>
            <a href="/"> My order</a>
          </li>
          <li>
            <a href="/"> My account</a>
          </li>
          <li>
            <a href="/"> Sign out</a>
          </li>
        </ul>
      </div>
  )
}

export default MenuDesk