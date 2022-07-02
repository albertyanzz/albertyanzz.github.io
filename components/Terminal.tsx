import Draggable from "react-draggable";
import styles from "../styles/Terminal.module.css";
import { TerminalLine } from "./TerminalLine";
import { useState } from "react";
import { TerminalContext } from "../lib/contexts";
import { directoryTree } from "../lib/directory";
import { IDirectory } from "../lib/types";
import _ from "lodash";

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [directoryPath, setDirectoryPath] = useState<IDirectory[]>([
    directoryTree,
  ]);
  const [currDirectory, setCurrDirectory] = useState<IDirectory>(directoryTree);

  const updateScroll = () => {
    setTimeout(() => {
      var element = document.getElementById("terminal");
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    }, 0);
  };

  const addLine = (str: string) => {
    setLines((line) => [
      ...line,
      <TerminalLine
        path={_.cloneDeep(
          directoryPath.map((dir) => {
            return dir.name;
          })
        )}
        input={false}
      >
        {str}
      </TerminalLine>,
    ]);
    if (str) {
      command(str);
    }

    updateScroll();
  };

  const command = (str: string) => {
    const com = str.substring(0, str.indexOf(" "));
    const val = str.substring(str.indexOf(" ") + 1);

    switch (com || val) {
      case "help":
        printToConsole([
          "Commands:",
          "<ls>: View contents. Directories are capitalized, files are lowercase.",
          "<cd> <path>: Switch directory to <path> (paths can be subdirectories or .. for previous directory)",
          "<cat> <file>: View contents of file in current directory",
          "<clear>: Clear terminal",
        ]);
        break;
      case "cd":
        if (
          !com ||
          (val !== ".." &&
            !currDirectory.subDirectories.some(
              (sub) => sub.name.toLowerCase() === val.toLowerCase()
            ))
        ) {
          printToConsole(["Please input valid path."]);
        } else if (val === "..") {
          if (directoryPath.length > 1) {
            const newPath = directoryPath;
            newPath.pop();
            setDirectoryPath(newPath);
            setCurrDirectory(directoryPath[directoryPath.length - 1]);
          }
        } else {
          const dir = currDirectory.subDirectories.find(
            (sub) => sub.name.toLowerCase() === val.toLowerCase()
          );
          if (dir) {
            setDirectoryPath((path) => [...path, dir]);
            setCurrDirectory(dir);
          }
        }
        break;
      case "ls":
        const directories = currDirectory.subDirectories.map((sub) => {
          return sub.name;
        });
        const files = currDirectory.files.map((file) => {
          return file.name;
        });
        printToConsole(directories.concat(files));
        break;
      case "cat":
        if (
          !com ||
          !currDirectory.files.some(
            (file) => file.name.toLowerCase() === val.toLowerCase()
          )
        ) {
          printToConsole(["Please input valid file."]);
        } else {
          const file = currDirectory.files.find(
            (f) => f.name.toLowerCase() === val.toLowerCase()
          );
          if (file) {
            printToConsole(file.content);
          }
        }
        break;
      case "clear":
        setLines([]);
        break;
      default:
        printToConsole(["Unknown command. Type <help> to see commands."]);
        break;
    }
  };

  const printToConsole = (strs: string[]) => {
    const val = (
      <div className={styles.console_print}>
        {strs.map((str) => {
          return <span>{str}</span>;
        })}
      </div>
    );

    setLines((line) => [...line, val]);
    updateScroll();
  };

  return (
    <TerminalContext.Provider value={{ state: [], dispatch: addLine }}>
      <label htmlFor="input-line">
        <Draggable axis="both" defaultPosition={{ x: 50, y: 50 }}>
          <div id="terminal" className={styles.terminal_container}>
            <p className={styles.welcome_text}>
              Welcome to Albert's site. Type &lt;help&gt; to see options.
            </p>
            {lines.map((line) => {
              return line;
            })}
            <TerminalLine
              path={directoryPath.map((dir) => {
                return dir.name;
              })}
              input={true}
            />
          </div>
        </Draggable>
      </label>
    </TerminalContext.Provider>
  );
};
