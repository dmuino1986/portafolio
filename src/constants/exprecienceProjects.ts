export type ExperinceProject = {
  title: string;
  startDate: Date;
  endDate: Date;
  company: string;
  location: string;
  description: string[];
};

export const ExperienceProjects: ExperinceProject[] = [
  {
    title: "Frontend Developer | ReactJs",
    startDate: new Date(2022, 3),
    endDate: new Date(2022, 7),
    company: "Liontude. Design & Development of Applications",
    location: "Remote",
    description: [
      "Collaborated as part of a two-person team to design and build One Step Job, the web application that complements the One Step Job mobile app, a platform where users can find job opportunities, and hospitality companies can search for candidates.",
      "Developed a dynamic administration dashboard using React.js and React Redux Toolkit, ensuring efficient state management and real-time updates across the application.",
    ],
  },
  {
    title: "Back End Developer | Django Rest Framework",
    startDate: new Date(2021, 11),
    endDate: new Date(2022, 2),
    company: "Liontude. Design & Development of Applications",
    location: "Remote",
    description: [
      "Collaborated as a backend developer in a two-person team, utilizing Django Rest Framework to build and maintain the API for the One Step Job mobile and web applications.",
    ],
  },
  {
    title: "Back End Developer | Asp .Net Core",
    startDate: new Date(2012, 4),
    endDate: new Date(2021, 7),
    company: "Liontude. Design & Development of Applications",
    location: "Remote",
    description: [
      "Developed and maintained back-end systems using ASP.NET Core 5.0 for the Citizen Now and Canada Citizen Now applications.",
      "Enhanced functionality by implementing new features and improving existing APIs to ensure optimal performance and scalability.",
      "Provided ongoing support and troubleshooting for API integrations, ensuring seamless operation and user satisfaction.",
    ],
  },

  {
    title: "Full-stack Developer | Asp .Net Core 2.2 | ReactJs",
    startDate: new Date(2019, 3),
    endDate: new Date(2019, 9),
    company: "",
    location: "Remote",
    description: [
      "Collaborated with a team member to design and develop the enterprise web application MTFBS.CRB.AUDIT.",
      "Utilized ASP.NET Core MVC 2.2 for back-end development and ReactJS with Material-UI components for front-end implementation.",
      "Delivered a robust and scalable solution by integrating front-end and back-end systems, ensuring seamless functionality and user experience.",
      "https://www.crb.ch/",
    ],
  },
];
/*    {
        title: "",
        startDate: new Date(
          2022,
          3,
        ),
        endDate: new Date(
          2022,
          7,
        ),
        company: "",
        location: "Remote",
        description: ["", ""],
      },
];
*/
