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
