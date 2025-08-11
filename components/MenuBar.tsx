import styles from '../styles/SideMenu.module.css';
import { MenuContext } from '../lib/contexts';
import { useContext } from 'react';
import Link from 'next/link';

interface IProps {
  length: number;
  id: number;
  text: string;
  link?: string;
  onClick?: React.MouseEventHandler;
}

export const MenuBar: React.FC<IProps> = ({
  length,
  text,
  id,
  link,
  onClick,
}) => {
  const barStyle = {
    backgroundColor: '#FFFFFF',
    height: '12px',
    borderRadius: '6px',
    width: `${length}px`,
    marginRight: '10px',
  };

  const { selected, dispatch: setSelected } = useContext(MenuContext);
  const content = (
    <div
      className={styles.bar_container}
      onMouseEnter={() => {
        setSelected(id);
      }}
      onClick={() => {
        onClick ? onClick : null;
      }}
    >
      <div style={barStyle} />
      <div className={styles.bar}>{selected === 0 ? '' : text}</div>
    </div>
  );

  return link ? <Link href={`/${link}`}>{content}</Link> : content;
};
