import React, { createContext } from "react";

export const FolderContext = createContext<{
  state: string;
  dispatch: React.Dispatch<any>;
}>({ state: "", dispatch: () => null });

export const TerminalContext = createContext<{
  state: string[];
  dispatch: React.Dispatch<any>;
}>({ state: [], dispatch: () => null });
