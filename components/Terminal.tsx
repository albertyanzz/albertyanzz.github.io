import styles from '../styles/Terminal.module.css';
import { TerminalLine } from './TerminalLine';
import {
  JSX,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from 'react';
import { TerminalContext } from '../lib/contexts';
import { directoryTree } from '../lib/directory';
import { IDirectory, IContent } from '../lib/types';
import _ from 'lodash';
import { useMediaQuery } from 'react-responsive';
import { mobileWidth } from '../lib/constants';

const TerminalWindow: React.FC = () => {
  const {
    state: { terminalStyle, lines, directoryPath, currDirectory, lineHistory },
  } = useContext(TerminalContext);

  return (
    <div id="terminal" className={terminalStyle}>
      <p className={styles.welcome_text}>
        Welcome to Albert&apos;s site. Type &lt;help&gt; to see options.
      </p>
      {lines.map((line) => {
        return line;
      })}
      <TerminalLine
        path={directoryPath.map((dir) => dir.name)}
        lineHistory={lineHistory}
        input={true}
      />
    </div>
  );
};

export const Terminal: React.FC = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileWidth}px)`,
  });

  const [minimized, setMinimized] = useState(false);
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [lineHistory, setLineHistory] = useState<string[]>([]);
  const [directoryPath, setDirectoryPath] = useState<IDirectory[]>([
    directoryTree,
  ]);
  const [currDirectory, setCurrDirectory] = useState<IDirectory>(directoryTree);
  const keyIt = useRef(0);

  const updateScroll = () => {
    setTimeout(() => {
      var element = document.getElementById('terminal');
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    }, 0);
  };

  const navigatePath = (
    pathStr: string
  ): { success: boolean; error?: string } => {
    // Handle empty path
    if (!pathStr.trim()) {
      return { success: false, error: 'Please input valid path.' };
    }

    // Split path into segments, filter out empty strings
    const segments = pathStr.split('/').filter((segment) => segment !== '');

    let tempDir = currDirectory;
    let tempPath = [...directoryPath];

    // Process each path segment
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];

      if (segment === '.') {
        // Current directory - do nothing
        continue;
      } else if (segment === '..') {
        // Go up one directory
        if (tempPath.length > 1) {
          tempPath.pop();
          tempDir = tempPath[tempPath.length - 1];
        }
        // If already at root, ignore the ..
      } else {
        // Look for subdirectory
        const subDir = tempDir.subDirectories.find(
          (sub) => sub.name.toLowerCase() === segment.toLowerCase()
        );

        if (!subDir) {
          return { success: false, error: `Directory '${segment}' not found.` };
        }

        tempPath.push(subDir);
        tempDir = subDir;
      }
    }

    // Update state
    setDirectoryPath(tempPath);
    setCurrDirectory(tempDir);
    return { success: true };
  };

  const getDirectoryForPath = (pathStr: string): IDirectory => {
    // Handle empty path
    if (!pathStr.trim()) {
      return currDirectory;
    }

    const segments = pathStr.split('/').filter((segment) => segment !== '');

    let tempDir = currDirectory;
    let tempPath = [...directoryPath];

    // Process all path segments to get the target directory
    for (const segment of segments) {
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        if (tempPath.length > 1) {
          tempPath.pop();
          tempDir = tempPath[tempPath.length - 1];
        }
      } else {
        const subDir = tempDir.subDirectories.find(
          (sub) => sub.name.toLowerCase() === segment.toLowerCase()
        );
        if (!subDir) {
          return currDirectory; // Invalid path, return current
        }
        tempPath.push(subDir);
        tempDir = subDir;
      }
    }

    return tempDir;
  };

  const addLine = (str: string) => {
    setLines((line) => [
      ...line,
      <TerminalLine
        key={keyIt.current++}
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
      setLineHistory((prev) => [...prev, str]);
      command(str);
    }

    updateScroll();
  };

  const command = (str: string) => {
    const com = str.substring(0, str.indexOf(' ')).toLowerCase();
    const val = str.substring(str.indexOf(' ') + 1).toLowerCase();

    switch (com || val) {
      case 'help':
        printToConsole([
          'Commands:',
          '<ls>: View contents. Directories are capitalized, files are lowercase.',
          '<cd> <path>: Switch directory to <path> (paths can be subdirectories or .. for previous directory)',
          '<cat> <file>: View contents of file in current directory',
          '<clear>: Clear terminal',
          '<exit>: Minimize terminal window',
        ]);
        break;
      case 'cd':
        if (!com) {
          printToConsole(['Please input valid path.']);
        } else {
          const result = navigatePath(val);
          if (!result.success) {
            printToConsole([result.error || 'Invalid path.']);
          }
        }
        break;
      case 'ls':
        const directories = currDirectory.subDirectories.map((sub) => {
          return sub.name;
        });
        const files = currDirectory.files.map((file) => {
          return file.name;
        });
        printToConsole(directories.concat(files));
        break;
      case 'cat':
        if (
          !com ||
          !currDirectory.files.some(
            (file) => file.name.toLowerCase() === val.toLowerCase()
          )
        ) {
          printToConsole(['Please input valid file.']);
        } else {
          const file = currDirectory.files.find(
            (f) => f.name.toLowerCase() === val.toLowerCase()
          );
          if (file) {
            printContent(file.content);
          }
        }
        break;
      case 'clear':
        setLines([]);
        break;
      case 'exit':
        setMinimized(true);
        break;
      default:
        printToConsole(['Unknown command. Type <help> to see commands.']);
        break;
    }
  };

  const autoComplete = (str: string) => {
    const spaceIndex = str.indexOf(' ');
    const com =
      spaceIndex !== -1
        ? str.substring(0, spaceIndex).toLowerCase()
        : str.toLowerCase();
    const val =
      spaceIndex !== -1 ? str.substring(spaceIndex + 1).toLowerCase() : '';
    const commandMatches = ['cd', 'ls', 'help', 'cat', 'clear', 'exit'];
    const catMatches = currDirectory.files.map((file) => file.name);

    // If no space found, try to autocomplete the command
    if (spaceIndex === -1) {
      const matchingCommands = commandMatches.filter((cmd) =>
        cmd.startsWith(com)
      );
      if (matchingCommands.length === 1) {
        return matchingCommands[0];
      }
      return str;
    }

    // If command is cd or cat, try to autocomplete the value
    if (com === 'cd') {
      // Work with original case value (not lowercased val)
      const originalVal = str.substring(str.indexOf(' ') + 1);
      const lastSlashIndex = originalVal.lastIndexOf('/');
      let pathPrefix = '';
      let searchTerm = originalVal;
      let targetDir = currDirectory;

      if (lastSlashIndex !== -1) {
        // Has path segments like "Links/../ab"
        pathPrefix = originalVal.substring(0, lastSlashIndex + 1);
        searchTerm = originalVal.substring(lastSlashIndex + 1);
        // Get directory by processing the path prefix (lowercase for matching only)
        targetDir = getDirectoryForPath(pathPrefix.toLowerCase());
      }

      // Handle special cases for . and ..
      if (searchTerm === '..') {
        return `cd ${pathPrefix}..`;
      } else if (searchTerm === '.') {
        return `cd ${pathPrefix}.`;
      }

      const matchingDirs = targetDir.subDirectories
        .filter((dir) =>
          dir.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
        .map((dir) => dir.name);

      if (matchingDirs.length === 1) {
        return `cd ${pathPrefix}${matchingDirs[0]}`;
      }
    } else if (com === 'cat') {
      const matchingFiles = catMatches.filter((file) =>
        file.toLowerCase().startsWith(val.toLowerCase())
      );
      if (matchingFiles.length === 1) {
        return `cat ${matchingFiles[0]}`;
      }
    }

    return str;
  };

  const printContent = (contents: IContent[]) => {
    const val = (
      <div className={styles.console_print}>
        {contents.map((content) => {
          switch (content.type) {
            case 'link':
              return (
                <span key={keyIt.current++}>
                  <a href={content.link} target="_blank" rel="noreferrer">
                    {content.content}
                  </a>
                </span>
              );
            default:
              return <span key={keyIt.current++}>{content.content}</span>;
          }
        })}
      </div>
    );

    setLines((line) => [...line, val]);
    updateScroll();
  };

  const printToConsole = (strs: string[]) => {
    const val = (
      <div className={styles.console_print}>
        {strs.map((str) => {
          return <span key={keyIt.current++}>{str}</span>;
        })}
      </div>
    );

    setLines((line) => [...line, val]);
    updateScroll();
  };

  const [terminalStyle, setTerminalStyle] = useState(styles.terminal_container);

  useEffect(() => {
    isMobile
      ? setTerminalStyle(styles.mobile_terminal)
      : setTerminalStyle(styles.terminal_container);
  }, [isMobile]);

  return (
    <TerminalContext.Provider
      value={{
        state: {
          lines,
          lineHistory,
          directoryPath,
          currDirectory,
          terminalStyle,
        },
        dispatch: addLine,
        autoComplete,
      }}
    >
      {minimized ? (
        <div
          className={styles.minimized}
          onClick={() => {
            setMinimized(false);
            updateScroll();
          }}
        >
          &#91; / &#93;
        </div>
      ) : (
        <label htmlFor="input-line">
          <TerminalWindow />
        </label>
      )}
    </TerminalContext.Provider>
  );
};
