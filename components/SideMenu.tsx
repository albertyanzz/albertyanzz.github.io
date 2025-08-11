import { MenuBar } from './MenuBar';
import { useState } from 'react';
import styles from '../styles/SideMenu.module.css';
import { MenuContext } from '../lib/contexts';

interface IProps {
  selection?: string[];
}

export const SideMenu: React.FC<IProps> = ({ selection }) => {
  const [selected, setSelected] = useState(0);

  const calculateLength = (pos: number, total: number, selected: number) => {
    const maxlen = 100;
    const dev = total / 2;
    const x = Math.abs(pos - selected);
    const mean = 0;
    const y = Math.pow(Math.E, -Math.pow((x - mean) / dev, 2) / 2);
    // / (dev * Math.sqrt(2 * Math.PI));
    return y * maxlen;
  };

  const sel = ['About', 'Experience', 'Projects', 'Links'];

  return (
    <div
      className={styles.menu_container}
      onMouseLeave={() => {
        setSelected(0);
      }}
    >
      <MenuContext.Provider
        value={{ selected: selected, dispatch: setSelected }}
      >
        {sel.map((s, i) => {
          return (
            <MenuBar
              key={i}
              id={i + 1}
              length={
                selected === 0
                  ? 30
                  : calculateLength(i + 1, sel.length, selected)
              }
              text={s}
              link={s.toLowerCase()}
            />
          );
        })}
      </MenuContext.Provider>
    </div>
  );
};
