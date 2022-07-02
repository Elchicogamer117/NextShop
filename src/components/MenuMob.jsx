import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/MenuMob.module.scss';

const MenuMob = () => {
  return (
    <div className={styles.menuMob}>
      <ul>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/"> All </Link>
        </li>
        <li>
          <Link href="/"> Clothes </Link>
        </li>
        <li>
          <Link href="/"> Electronics </Link>
        </li>
        <li>
          <Link href="/"> Furnitures </Link>
        </li>
        <li>
          <Link href="/"> Toys </Link>
        </li>
        <li>
          <Link href="/"> Others </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/"> My orders </Link>
        </li>
        <li>
          <Link href="/"> My account </Link>
        </li>
      </ul>
      <ul className={styles.bloquEnd}>
        <li>
          <Link href="/" className={styles.email}>
            {' '}
            elchicogamer117@git.com{' '}
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.signOut}>
            {' '}
            Sign out{' '}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMob;
