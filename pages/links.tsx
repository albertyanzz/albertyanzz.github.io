import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Links: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/albertzyan/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/albertyanzz/" target="_blank">
            Github
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100002934891788"
            target="_blank"
          >
            Facebook
          </a>
          <a href="https://www.instagram.com/albertzzyan/" target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
