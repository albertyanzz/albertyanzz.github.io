import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getPostsDataByFolder } from "../lib/posts";
import { Params } from "next/dist/server/router";
import { IExperience } from "../lib/types";
import styles from "../styles/Home.module.css";

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
    <div className={styles.container}>
      <div className={styles.main}>
        <div style={{ marginTop: "5%", fontWeight: "500" }}>
          For more complete experiences, see LinkedIn profile on Links page
        </div>
        <div className={styles.experiences}>
          {experienceData.map((experience: IExperience) => (
            <div key={experience.title}>
              <h1>{experience.title}</h1>
              <div>Started: {experience.dateStart}</div>
              <div>
                {experience.ended
                  ? `Ended: ${experience.dateEnd}`
                  : "To present"}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: experience.contentHtml }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
