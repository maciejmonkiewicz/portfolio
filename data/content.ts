export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "CEO at Apple Inc.",
        subTitle: "Remote",
        date: "1976 - Present",
        description: "Was busy at thinking different.",
      },
      {
        title: "CEO at Google Inc.",
        subTitle: "San Francisco",
        date: "2004 - 2014",
        description: "Searched for different things.",
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
