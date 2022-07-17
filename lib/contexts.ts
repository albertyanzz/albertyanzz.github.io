import React, { createContext } from "react";

export const FolderContext = createContext<{
  state: string;
  dispatch: React.Dispatch<any>;
}>({ state: "", dispatch: () => null });

export const TerminalContext = createContext<{
  state: string[];
  dispatch: React.Dispatch<any>;
}>({ state: [], dispatch: () => null });

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
