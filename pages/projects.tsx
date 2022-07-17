import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { getPostsDataByFolder } from "../lib/posts";
import styles from "../styles/Projects.module.css";
import { SideMenu } from "../components/SideMenu";
import { useMediaQuery } from "react-responsive";
import { mobileWidth } from "../lib/constants";
import { MobileMenu } from "../components/MobileMenu";
import { Params } from "next/dist/server/router";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectContext } from "../lib/contexts";

export const getStaticProps: GetStaticProps = async () => {
  const projectDataPromise = await getPostsDataByFolder("resume/projects");
  const projectData = await Promise.all(projectDataPromise);
  return {
    props: {
      projectData,
    },
  };
};

const Projects: NextPage<Params> = ({ projectData }) => {
  const mobile = useMediaQuery({
    query: `(max-width: ${mobileWidth}px)`,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState(0);

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
      <ProjectContext.Provider
        value={{ selected: selected, dispatch: setSelected }}
      >
        <div className={isMobile ? styles.mobile_content : styles.content}>
          <ProjectCard id={1} info={projectData[0]} />
        </div>
      </ProjectContext.Provider>
    </div>
  );
};

export default Projects;
