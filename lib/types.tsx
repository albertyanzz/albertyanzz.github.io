import { ParsedUrlQuery } from "querystring";

export interface IParams extends ParsedUrlQuery {
  id: string;
}

export interface IPostData {
  title: string;
  contentHtml: string;
}

export interface IExperience {
  title: string;
  dateStart: string;
  ended: boolean;
  dateEnd?: string;
  contentHtml: string;
}

export interface IDirectory {
  name: string;
  subDirectories: IDirectory[];
  files: IFile[];
  parent?: IDirectory;
}

export interface IFile {
  name: string;
  content: string[];
}
