import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getPostsDataByFolder } from "../lib/posts";
import { Params } from "next/dist/server/router";
import { IExperience } from "../lib/types";

export const getStaticProps: GetStaticProps = async () => {
  const experienceDataPromise = await getPostsDataByFolder(
    "resume/experiences"
  );
  const experienceData = await Promise.all(experienceDataPromise);
  return {
    props: {
      experienceData,
    },
  };
};

const Experiences: NextPage<Params> = ({ experienceData }) => {
  //   const experienceJson = Promise.all(experienceData);
  //   console.log(experienceData);
  return (
    <>
      {experienceData.map((experience: IExperience) => (
        <>
          <h1>{experience.title}</h1>
          <div>Started: {experience.dateStart}</div>
          <div>
            {experience.ended ? `Ended: ${experience.dateEnd}` : "To present"}
          </div>
          <div dangerouslySetInnerHTML={{ __html: experience.contentHtml }} />
        </>
      ))}
    </>
  );
};

export default Experiences;
