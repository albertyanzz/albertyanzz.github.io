import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Selection.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { mobileWidth } from '../lib/constants';

const Selection: NextPage = () => {
  const mobile = useMediaQuery({
    query: `(max-width: ${mobileWidth}px)`,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mobile ? setIsMobile(true) : setIsMobile(false);
  }, [mobile]);

  return (
    <div className={isMobile ? styles.mobile_container : styles.container}>
      <Link
        href="/about"
        className={classNames(
          isMobile ? styles.mobile_nav : styles.nav_column,
          styles.navy
        )}
      >
        About
      </Link>
      <Link
        href="/experience"
        className={classNames(
          isMobile ? styles.mobile_nav : styles.nav_column,
          styles.blue
        )}
      >
        Experience
      </Link>
      <Link
        href="/projects"
        className={classNames(
          isMobile ? styles.mobile_nav : styles.nav_column,
          styles.brown
        )}
      >
        Projects
      </Link>
      <Link
        href="/links"
        className={classNames(
          isMobile ? styles.mobile_nav : styles.nav_column,
          styles.beige
        )}
      >
        Links
      </Link>
    </div>
  );
};

export default Selection;
