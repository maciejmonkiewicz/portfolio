export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Junior Hacker at BillTech",
        subTitle: "Remote",
        date: "2024 - Present",
        description: "",
      },
      {
        title: "Fullstack Developer at Monkiewicz Systemy Fiskalne",
        subTitle: "Olsztyn, Poland",
        date: "2022 - 2024",
        description:
          "During this time I developed and mentained internal tools for the company.",
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
    title: "Projects",
    items: [
      {
        title: "mAsystent at Firma Monkiewicz",
        subTitle: "",
        date: "2023",
        description:
          "AI Chatbot with RAG & ability to connect to store menagement systems.",
        isProject: true,

        images: [
          "/projects/masystent/1.png",
          "/projects/masystent/2.png",
          "/projects/masystent/3.png",
          "/projects/masystent/4.png",
        ],
      },
      {
        title: "mByte at PGS50",
        subTitle: "",
        date: "2022",
        description:
          "Advanced internal system for assisgning & menaging tasks within the company it self.",
        isProject: true,
        images: [
          "/projects/mbyte/1.png",
          "/projects/mbyte/2.png",
          "/projects/mbyte/3.png",
          "/projects/mbyte/4.png",
        ],
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
        title: "C1 English Certificate from Cambridge",
        subTitle: "",
        date: "2024",
        description: "",
      },
      {
        title: "Programmer Technician ",
        subTitle: "",
        date: "2024",
        description: "",
      },
      {
        title: "B1 English Certificate from Cambridge",
        subTitle: "",
        date: "2023",
        description: "",
      },
      {
        title: "Penetration Testing & Cybersecurity from iTech",
        subTitle: "",
        date: "2022",
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
    images?: string[];
    isProject?: boolean;
    repoUrl?: string;
    demoUrl?: string;
  }[];
};

export type ContentData = Content[];
