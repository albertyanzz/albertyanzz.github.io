import React, { ReactNode } from "react";
import Head from "next/head";
import { Terminal } from "./Terminal";
import styles from "../styles/Layout.module.css";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Albert Yan</title>
      </Head>
      <main className={styles.main}>
        <Terminal />
        {children}
      </main>
    </div>
  );
}
