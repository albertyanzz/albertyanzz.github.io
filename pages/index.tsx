import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.background_container}>
      {/* <Terminal /> */}
      <div className={styles.nav_container}>
        <div className={styles.title}>Albert Yan</div>

        <div className={styles.menu}>
          <div>Other pages coming soon</div>
          {/* <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/experiences">
            <a>Experience</a>
          </Link>
          <Link href="/links">
            <a>Links</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
