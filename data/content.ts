export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Fullstack Developer at Monkiewicz Systemy Fiskalne",
        subTitle: "Olsztyn, Poland",
        date: "2022 - 2024",
        description:
          "lorem ipsum dolor set amet consectetur adipiscing elit. lorem ipsum dolor set amet consectetur adipiscing elit.",
      },
      {
        title: "Internship at WP.pl",
        subTitle: "Remote",
        date: "2023",
        description:
          "Great opportunity to gain insights on how large scale systems work.",
      },
      {
        title: "Internship at Artneo",
        subTitle: "Remote / Olsztyn, Poland",
        date: "2022",
        description:
          "Amazing Internship, during which I learned a lot about web development.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title:
          "Technician Programmer at Electronic & Telecomunication Technical School",
        subTitle: "Olsztyn, Poland",
        date: "2019 - 2024",
        description: "",
      },
    ],
  },
  {
    title: "Certifications",
    items: [
      {
        title:
          "Technician Programmer at Electronic & Telecomunication Technical School",
        subTitle: "Olsztyn, Poland",
        date: "2019 - 2024",
        description: "",
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
