export type PageLink = {
  text: string;
  link: string;
};

export type Experience = {
  timeSpan: string;
  company: string;
  title: string;
  description: string;
};

export type Technology = {
  name: string;
  imgPath: string;
};

export type Project = {
  name: string;
  url: string;
  imgUrl: string;
  technologies: Technology['name'][];
  companyUrl?: string;
}