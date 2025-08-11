import { SvgIcon } from '@mui/material';
import { useState } from 'react';
import menu from '../assets/menu.svg';
import styles from '../styles/MobileMenu.module.css';
import Link from 'next/link';

export const MobileMenu: React.FC = () => {
  const [hidden, setHidden] = useState(true);

  const sel = ['About', 'Experience', 'Projects', 'Links'];

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SvgIcon
          component={menu}
          style={{
            height: '50px',
            width: '50px',
            cursor: 'pointer',
            zIndex: 9,
          }}
          viewBox="0 0 48 48"
          inheritViewBox
          onClick={() => {
            setHidden(!hidden);
          }}
        ></SvgIcon>
        {!hidden && (
          <div className={styles.links}>
            {sel.map((s) => {
              return (
                <Link href={s.toLowerCase()} key={s} className={styles.link}>
                  {s}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
