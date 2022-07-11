import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { getPostsDataByFolder } from "../lib/posts";
import { Params } from "next/dist/server/router";
import { IExperience } from "../lib/types";
import { SideMenu } from "../components/SideMenu";
import styles from "../styles/Experience.module.css";
import { useMediaQuery } from "react-responsive";
import { mobileWidth } from "../lib/constants";
import { MobileMenu } from "../components/MobileMenu";

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

const Experience: NextPage<Params> = ({ experienceData }) => {
  //   const experienceJson = Promise.all(experienceData);
  //   console.log(experienceData);
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
      {/* <div className={styles.experiences}>
        {experienceData.map((experience: IExperience) => (
          <div key={experience.title}>
            <h1>{experience.title}</h1>
            <div>Started: {experience.dateStart}</div>
            <div>
              {experience.ended ? `Ended: ${experience.dateEnd}` : "To present"}
            </div>
            <div dangerouslySetInnerHTML={{ __html: experience.contentHtml }} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Experience;
