import { IProject } from "../lib/types";
import { useEffect, useState } from "react";
import styles from "../styles/ProjectModule.module.css";
import { ProjectContext } from "../lib/contexts";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { mobileWidth } from "../lib/constants";

interface IProps {
  info: IProject;
}

export const ProjectModule: React.FC<IProps> = ({ info }) => {
  const mobile = useMediaQuery({
    query: `(max-width: ${mobileWidth}px)`,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mobile ? setIsMobile(true) : setIsMobile(false);
  }, [mobile]);

  const { selected, dispatch: setSelected } = useContext(ProjectContext);

  return (
    <div
      className={isMobile ? styles.mobile_outer : styles.outer}
      onClick={() => setSelected(0)}
    >
      <div className={isMobile ? styles.mobile_container : styles.container}>
        <div
          className={
            isMobile ? styles.mobile_top_container : styles.top_container
          }
        >
          <div
            className={
              isMobile ? styles.mobile_logo_container : styles.logo_container
            }
          >
            <div
              className={isMobile ? styles.mobile_logo : styles.logo}
              style={{ backgroundImage: `url(/projects/${info.logo})` }}
            ></div>
          </div>
          <div className={isMobile ? styles.mobile_content : styles.content}>
            <div className={styles.title}>{info.title}</div>
            {info.link && (
              <div className={styles.link}>
                <a href={info.link} target="_blank" rel="noreferrer">
                  Link
                </a>
              </div>
            )}
            <div
              className={styles.info}
              dangerouslySetInnerHTML={{ __html: info.contentHtml }}
            />
          </div>
        </div>
        <div className={isMobile ? styles.mobile_bottom : styles.bottom_bar}>
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
    </div>
  );
};
