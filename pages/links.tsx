import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { SideMenu } from '../components/SideMenu';
import { SvgIcon } from '@mui/material';
import styles from '../styles/Links.module.css';
import github from '../assets/links/github.svg';
import linkedin from '../assets/links/linkedin.svg';
import instagram from '../assets/links/instagram.svg';
import mail from '../assets/links/mail.svg';
import { useMediaQuery } from 'react-responsive';
import { mobileWidth } from '../lib/constants';
import { MobileMenu } from '../components/MobileMenu';

const Links: NextPage = () => {
  const mobile = useMediaQuery({
    query: `(max-width: ${mobileWidth}px)`,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mobile ? setIsMobile(true) : setIsMobile(false);
  }, [mobile]);

  const iconStyle = {
    style: {
      height: isMobile ? '100px' : '150px',
      width: isMobile ? '100px' : '150px',
    },
    viewBox: '0 0 48 48',
  };

  const links = [
    { url: 'https://www.linkedin.com/in/albertzyan/', icon: linkedin },
    { url: 'https://github.com/albertyanzz', icon: github },
    { url: 'https://www.instagram.com/albertzzyan/', icon: instagram },
    { url: 'mailto:albertyanalbert@gmail.com', icon: mail },
  ];

  return (
    <div className={isMobile ? styles.mobile_container : styles.container}>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className={styles.side_bar}>
          <SideMenu />
        </div>
      )}
      <div className={isMobile ? styles.mobile_content : styles.content}>
        {links.map((link) => {
          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={isMobile ? styles.mobile_link : ''}
            >
              <SvgIcon component={link.icon} {...iconStyle} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
