import { ReactNode, useEffect } from 'react';
import { useContext } from 'react';
import styles from '../styles/TerminalLine.module.css';
import { TerminalContext } from '../lib/contexts';
import { useState } from 'react';
import { IDirectory } from '../lib/types';

interface IProps {
  input: boolean;
  children?: ReactNode;
  path: string[];
  print?: boolean;
  lineHistory?: string[];
}

export const TerminalLine: React.FC<IProps> = ({
  input,
  children,
  print,
  path,
  lineHistory,
}) => {
  const [inputText, setInputText] = useState('');
  const { dispatch: addLine, autoComplete } = useContext(TerminalContext);
  const [lineIndex, setLineIndex] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  useEffect(() => {
    if (lineHistory) {
      setLines([...lineHistory, '']);
      setLineIndex(lineHistory.length);
    }
  }, [lineHistory]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addLine(inputText);
      setInputText('');
    } else if (event.key === 'ArrowDown') {
      if (lineIndex < lines.length - 1) {
        // commit the current line into our lines
        setLines((prevLines) => [
          ...prevLines.slice(0, lineIndex),
          inputText,
          ...prevLines.slice(lineIndex + 1),
        ]);
        setInputText(lines[lineIndex + 1] ?? '');
        setLineIndex((idx) => idx + 1);
      }
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      if (lineIndex > 0) {
        // commit the current line into our lines
        setLines((prevLines) => [
          ...prevLines.slice(0, lineIndex),
          inputText,
          ...prevLines.slice(lineIndex + 1),
        ]);
        setInputText(lines[lineIndex - 1] ?? '');
        setLineIndex((idx) => idx - 1);
      }
      event.preventDefault();
    } else if (event.key === 'Tab') {
      setInputText(autoComplete(inputText));
      event.preventDefault();
    }
  };

  return print ? (
    <div>
      <span>{children}</span>
    </div>
  ) : (
    <div className={styles.terminal_line}>
      <span className={styles.light_green}>visitor@albertzzyan</span>
      <span className={styles.white}>:</span>
      <span className={styles.light_cyan}>{path.join('/')}</span>
      <span className={styles.white}>$</span>
      {input ? (
        <input
          id="input-line"
          className={styles.input}
          value={inputText}
          onChange={handleInputChange}
          spellCheck={false}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className={styles.children}>{children}</span>
      )}
    </div>
  );
};
