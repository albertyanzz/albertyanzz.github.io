import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import { SideMenu } from "../components/SideMenu";
import { useMediaQuery } from "react-responsive";
import { mobileWidth } from "../lib/constants";
import { MobileMenu } from "../components/MobileMenu";

const Projects: NextPage = () => {
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
        <div className={styles.placeholder}></div>
        <div className={styles.placeholder}></div>
        <div className={styles.placeholder}></div>
        <div className={styles.placeholder}></div>
      </div>
    </div>
  );
};

export default Projects;
