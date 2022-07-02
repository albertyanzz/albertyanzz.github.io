import { IDirectory, IFile } from "./types";

export const aboutFile: IFile = {
  name: "about.txt",
  content: [
    {
      type: "text",
      content:
        "My name is Albert and whether it's through programming, dancing, writing, giving speeches, or other media forms, I'm always looking to innovate and create something that's uniquely me.",
    },
  ],
};

export const linkedin: IFile = {
  name: "linkedin",
  content: [
    {
      type: "link",
      content: "Click to go to linkedin",
      link: "https://www.linkedin.com/in/albertzyan/",
    },
  ],
  link: true,
};

export const github: IFile = {
  name: "github",
  content: [
    {
      type: "link",
      content: "Click to go to github",
      link: "https://github.com/albertyanzz/",
    },
  ],
  link: true,
};

export const instagram: IFile = {
  name: "instagram",
  content: [
    {
      type: "link",
      content: "Click to go to instagram",
      link: "https://www.instagram.com/albertzzyan/",
    },
  ],
  link: true,
};

export const about: IDirectory = {
  name: "About",
  subDirectories: [],
  files: [aboutFile],
};

export const links: IDirectory = {
  name: "Links",
  subDirectories: [],
  files: [linkedin, github, instagram],
};

export const directoryTree: IDirectory = {
  name: "~",
  subDirectories: [about, links],
  files: [],
};
