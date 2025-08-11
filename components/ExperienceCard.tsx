import styles from '../styles/ExperienceCard.module.css';
import { IExperience } from '../lib/types';
import { ExperienceModule } from './ExperienceModule';
import { ExpContext } from '../lib/contexts';
import { useContext } from 'react';

interface IProps {
  id: number;
  info: IExperience;
}

export const ExperienceCard: React.FC<IProps> = ({ info, id }) => {
  const { selected, dispatch: setSelected } = useContext(ExpContext);

  return (
    <>
      {selected === id && <ExperienceModule info={info} />}
      <div
        className={styles.container}
        onClick={() => {
          setSelected(id);
        }}
      >
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
        <div
          className={styles.logo}
          style={{ backgroundImage: `url(/experience/${info.logo})` }}
        ></div>
        <div className={styles.text}>{info.company}</div>
        <div className={styles.text}>{info.title}</div>
      </div>
    </>
  );
};
