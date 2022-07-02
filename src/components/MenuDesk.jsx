import React from 'react';
import Link from 'next/link';
import styles from 'styles/components/MenuDesk.module.scss';

const MenuDesk = () => {
  return (
    <div className={styles.menuDesk}>
      <ul>
        <li>
          <Link href="/"> My order</Link>
        </li>
        <li>
          <Link href="/"> My account</Link>
        </li>
        <li>
          <Link href="/"> Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesk;
