import { IDirectory, IFile } from "./types";

export const aboutFile: IFile = {
  name: "about.txt",
  content: [
    "My name is Albert and whether it's through programming, dancing, writing, giving speeches, or other media forms, I'm always looking to innovate and create something that's uniquely me.",
  ],
};

export const about: IDirectory = {
  name: "About",
  subDirectories: [],
  files: [aboutFile],
};

export const directoryTree: IDirectory = {
  name: "~",
  subDirectories: [about],
  files: [],
};
