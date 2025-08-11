import React, { createContext, JSX } from 'react';
import { IDirectory } from './types';

export const FolderContext = createContext<{
  state: string;
  dispatch: React.Dispatch<any>;
}>({ state: '', dispatch: () => null });

export const TerminalContext = createContext<{
  state: {
    lines: JSX.Element[];
    lineHistory: string[];
    directoryPath: IDirectory[];
    currDirectory: IDirectory;
    terminalStyle: string;
  };
  dispatch: React.Dispatch<any>;
  autoComplete: (str: string) => string;
}>({
  state: {
    lines: [],
    lineHistory: [],
    directoryPath: [],
    currDirectory: {} as IDirectory,
    terminalStyle: '',
  },
  dispatch: () => null,
  autoComplete: (str: string) => str,
});

export const MenuContext = createContext<{
  selected: number;
  dispatch: React.Dispatch<any>;
}>({ selected: 0, dispatch: () => null });

export const ExpContext = createContext<{
  selected: number;
  dispatch: React.Dispatch<any>;
}>({ selected: 0, dispatch: () => null });

export const ProjectContext = createContext<{
  selected: number;
  dispatch: React.Dispatch<any>;
}>({ selected: 0, dispatch: () => null });
