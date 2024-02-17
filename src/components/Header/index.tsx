'use client';
import React from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import Button from '../Button';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const path = usePathname();

  const onCreaeteClick = () => {
    router.push('/editor');
  };

  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <div className={styles.headerTitle}>Flunty wiki</div>
      </Link>
      {path === '/' && <Button onClick={onCreaeteClick}>작성하기</Button>}
    </div>
  );
};

export default Header;
