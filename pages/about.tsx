import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { getPostData } from '../lib/posts';
import { Params } from 'next/dist/server/router';
import styles from '../styles/About.module.css';
import { SideMenu } from '../components/SideMenu';
import { SvgIcon } from '@mui/material';
import download from '../assets/download.svg';
import { useMediaQuery } from 'react-responsive';
import { mobileWidth } from '../lib/constants';
import { MobileMenu } from '../components/MobileMenu';

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = await getPostData('about');
  return {
    props: {
      aboutData,
    },
  };
};

const About: NextPage<Params> = ({ aboutData }) => {
  const mobile = useMediaQuery({
    query: `(max-width: ${mobileWidth}px)`,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mobile ? setIsMobile(true) : setIsMobile(false);
  }, [mobile]);

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
        <div className={styles.title}>{aboutData.title}</div>
        <div
          className={styles.about_content}
          dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
        />
        <div className={styles.bottom}>
          <a className={styles.resume} href="/Albert_Yan_Resume.pdf" download>
            <SvgIcon component={download} inheritViewBox />
            <div className={styles.download}>Download resume</div>
          </a>
          <div className={styles.signature}>Albert Yan</div>
        </div>
      </div>
      {isMobile ? null : <div className={styles.side_pic} />}
    </div>
  );
};

export default About;
