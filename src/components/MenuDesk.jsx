import React from 'react'
import styles from 'styles/components/MenuDesk.module.scss'

const MenuDesk = () => {
  return (
      <div className={styles.menuDesk}>
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