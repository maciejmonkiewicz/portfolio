export type ContentItem = {
  title: string;
  subTitle: string;
  date: string;
  description: string;
  images?: string[];
  isProject?: boolean;
  repoUrl?: string;
  demoUrl?: string;
};

export type Content = {
  title: string;
  items: ContentItem[];
};

export type ContentData = Content[];
