import { ReactNode } from "react";
import { useContext } from "react";
import styles from "../styles/TerminalLine.module.css";
import { TerminalContext } from "../lib/contexts";
import { useState } from "react";

interface IProps {
  input: boolean;
  children?: ReactNode;
  path: string[];
  print?: boolean;
}

export const TerminalLine: React.FC<IProps> = ({
  input,
  children,
  print,
  path,
}) => {
  const [inputText, setInputText] = useState("");
  const { dispatch: addLine } = useContext(TerminalContext);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addLine(inputText);
      setInputText("");
    }
  };

  return print ? (
    <div>
      <span>{children}</span>
    </div>
  ) : (
    <div>
      <span className={styles.light_green}>visitor@albertyanzz.github.io</span>
      <span className={styles.white}>:</span>
      <span className={styles.light_cyan}>{path.join("/")}</span>
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
