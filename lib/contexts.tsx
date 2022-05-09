import { createContext } from "react";

export const FolderContext = createContext<{
  state: string;
  dispatch: React.Dispatch<any>;
}>({ state: "", dispatch: () => null });
