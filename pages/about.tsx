import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getPostData } from "../lib/posts";
import { Params } from "next/dist/server/router";
import styles from "../styles/Home.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = await getPostData("about");
  return {
    props: {
      aboutData,
    },
  };
};

const About: NextPage<Params> = ({ aboutData }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{aboutData.title}</h1>
        <hr></hr>
        <div
          className={styles.about_content}
          dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
        />
      </main>
    </div>
  );
};

export default About;
