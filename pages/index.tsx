import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Terminal } from '../components/Terminal';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Terminal />
      <Link href="/about" className={styles.button}>
        Continue to main site
      </Link>
    </div>
  );
};

export default Home;
