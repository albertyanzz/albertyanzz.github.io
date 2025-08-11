import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { getPostsDataByFolder } from '../lib/posts';
import styles from '../styles/Projects.module.css';
import { SideMenu } from '../components/SideMenu';
import { useMediaQuery } from 'react-responsive';
import { mobileWidth } from '../lib/constants';
import { MobileMenu } from '../components/MobileMenu';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectContext } from '../lib/contexts';
import { IProject } from '../lib/types';

interface ProjectsProps {
  projectData: IProject[];
}

export const getStaticProps: GetStaticProps = async () => {
  const projectDataPromise = await getPostsDataByFolder('resume/projects');
  const projectData = await Promise.all(projectDataPromise);
  return {
    props: {
      projectData,
    },
  };
};

const Projects: NextPage<ProjectsProps> = ({ projectData }) => {
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
          {projectData?.map((project: IProject, i: number) => {
            return <ProjectCard key={i} id={i + 1} info={project} />;
          })}
        </div>
      </ProjectContext.Provider>
    </div>
  );
};

export default Projects;
