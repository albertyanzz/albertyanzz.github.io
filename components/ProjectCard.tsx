import styles from "../styles/ProjectCard.module.css";
import { IProject } from "../lib/types";
import { ProjectModule } from "./ProjectModule";
import { ProjectContext } from "../lib/contexts";
import { useContext } from "react";

interface IProps {
  id: number;
  info: IProject;
}

export const ProjectCard: React.FC<IProps> = ({ info, id }) => {
  const { selected, dispatch: setSelected } = useContext(ProjectContext);

  return (
    <>
      {selected === id && <ProjectModule info={info} />}
      <div
        className={styles.container}
        onClick={() => {
          setSelected(id);
        }}
      >
        <div
          className={styles.logo}
          style={{ backgroundImage: `url(/projects/${info.logo})` }}
        ></div>
        <div className={styles.text}>{info.title}</div>
        <div className={styles.tech_bar}>
          {info.tech.map((t) => {
            return (
              <div
                key={t}
                className={styles.tech}
                style={{ backgroundImage: `url(/tech/${t}.svg)` }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
