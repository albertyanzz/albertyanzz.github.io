import { IDirectory, IFile } from "./types";

const aboutFile: IFile = {
  name: "about.txt",
  content: [
    {
      type: "text",
      content:
        "My name is Albert and whether it's through programming, dancing, writing, giving speeches, or other media forms, I'm always looking to innovate and create something that's uniquely me.",
    },
  ],
};

const linkedin: IFile = {
  name: "linkedin",
  content: [
    {
      type: "link",
      content: "Click to go to linkedin",
      link: "https://www.linkedin.com/in/albertzyan/",
    },
  ],
};

const github: IFile = {
  name: "github",
  content: [
    {
      type: "link",
      content: "Click to go to github",
      link: "https://github.com/albertyanzz/",
    },
  ],
};

const instagram: IFile = {
  name: "instagram",
  content: [
    {
      type: "link",
      content: "Click to go to instagram",
      link: "https://www.instagram.com/albertzzyan/",
    },
  ],
};

const encore: IFile = {
  name: "encore",
  content: [
    { content: "Software Intern" },
    { content: "Jan 2022 - May 2022" },
    {
      content:
        "- Worked on responsive frontend components for a webpage built on ReactJs, Typescript, and MaterialUI",
    },
    {
      content:
        "- Made dynamic web pages using Axios and React hooks to connect components to the company’s public API",
    },
    { content: "- Set up a payment gateway using Stripe and Express" },
    {
      content:
        "- Used ReactJs, Typescript, Stripe, ExpressJs, MaterialUI, Figma",
    },
  ],
};

const cp: IFile = {
  name: "course_producer",
  content: [
    { content: "USC Course Producer" },
    { content: "Aug 2021 - Present" },
    {
      content:
        "- Held 4 hours of office hours per week assisting students with their algorithm homework and course-related questions",
    },
    {
      content:
        "- Managed homework grading platform (Gradescope) for a class of 222 students",
    },
    {
      content:
        "- Held 4 hours of office hours per week to answer student questions about their C++ programming assignments and assisted in debugging code",
    },
  ],
};

const tgif: IFile = {
  name: "tgif_website",
  content: [
    { content: "Website for TGIF Toastmasters" },
    {
      content:
        "SPA made with NextJs, Material UI, and custom React components.",
    },
    { type: "link", content: "link", link: "https://www.tgiftoastmaster.com" },
  ],
};

const microplanner: IFile = {
  name: "microplanner",
  content: [
    { content: "Microplanner" },
    {
      content:
        "To-do list web application with achievements and subtasks. Supports Google login.",
    },
    {
      type: "link",
      content: "link",
      link: "https://elastic-poincare-f4a4a3.netlify.app/",
    },
  ],
};

const about: IDirectory = {
  name: "About",
  subDirectories: [],
  files: [aboutFile],
};

const links: IDirectory = {
  name: "Links",
  subDirectories: [],
  files: [linkedin, github, instagram],
};

const experience: IDirectory = {
  name: "Experience",
  subDirectories: [],
  files: [encore, cp],
};

const projects: IDirectory = {
  name: "Projects",
  subDirectories: [],
  files: [tgif, microplanner],
};

export const directoryTree: IDirectory = {
  name: "~",
  subDirectories: [about, links, experience, projects],
  files: [],
};
