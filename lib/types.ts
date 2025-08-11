import { ParsedUrlQuery } from 'querystring';

export interface IParams extends ParsedUrlQuery {
  id: string;
}

export interface IPostData {
  title: string;
  contentHtml: string;
}

export interface IExperience {
  company: string;
  title: string;
  dateStart: string;
  ended: boolean;
  dateEnd?: string;
  logo: string;
  tech: string[];
  contentHtml: string;
  order: number;
}

export interface IProject {
  title: string;
  link?: string;
  logo: string;
  tech: string[];
  contentHtml: string;
  order: number;
}

export interface IDirectory {
  name: string;
  subDirectories: IDirectory[];
  files: IFile[];
  parent?: IDirectory;
}

export interface IFile {
  name: string;
  content: IContent[];
}

export interface IContent {
  type?: string; // link, text
  content: string;
  link?: string;
}
