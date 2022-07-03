import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/MenuMob.module.scss';

const MenuMob = () => {
  return (
    <div className={styles.menuMob}>
      <ul>
        <li>
          <Link href="/categories">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/all"> All </Link>
        </li>
        <li>
          <Link href="/clothes"> Clothes </Link>
        </li>
        <li>
          <Link href="/electronics"> Electronics </Link>
        </li>
        <li>
          <Link href="/furnitures"> Furnitures </Link>
        </li>
        <li>
          <Link href="/toys"> Toys </Link>
        </li>
        <li>
          <Link href="/others"> Others </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/myorder"> My orders </Link>
        </li>
        <li>
          <Link href="/myaccount"> My account </Link>
        </li>
      </ul>
      <ul className={styles.bloquEnd}>
        <li>
          <Link href="/">
            <p className={styles.email}> elchicogamer117@git.com </p>
          </Link>
        </li>
        <li>
          <Link href="/signout">
            <p className={styles.signOut}> Sign out </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMob;
