import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getPostData } from "../lib/posts";
import { Params } from "next/dist/server/router";

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
    <>
      <h1>{aboutData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
    </>
  );
};

export default About;
