import {
    mobile,
    backend,
    coffee,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    lan,
    threejs,
    golang,
    jest,
    graphql,
    linux,
    trelloclone,
    googleshopping,
    weatherapp,
    nextjs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Expert",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Coffee Connoisseur",
      icon: coffee,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Go",
      icon: golang
    },
    {
      name: "NextJS",
      icon: nextjs
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "JEST",
      icon: jest,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Freelance",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed expertise in web development through self-teaching, completing multiple modules on freeCodeCamp and actively working through FullStackOpen from the University of Helsinki.",
        "Demonstrated proficiency in JavaScript with React as the primary front-end framework for project development. Utilized Node.js and MongoDB for back-end programming and database management.",        
        "Employed Jest and Cypress testing frameworks to effectively debug projects.",
        "Contributed to successful completion of various app-building projects by applying acquired knowledge and skills from training.",
        "Learning Go to be able to create a more rounded experience and integrate a back-end high level programming language to my coding base."
      ],
    },
    {
      title: "Bar Manager",
      company_name: "Swan Inn",
      icon: coffee,
      iconBg: "#383E56",
      date: "April 2022 - December 2022",
      points: [
        "Managed a team of bar staff and oversaw daily operations at a local country gastropub.",
        "Ensured smooth functioning of bar equipment and provided technical assistance when necessary, including the tills.",
        "Maintained high levels of customer satisfaction by delivering exceptional service and resolving any issues promptly.",
      ],
    },
    {
      title: "Microbiologist",
      company_name: "Lallemand",
      icon: lan,
      iconBg: "#E6DEDD",
      date: "September 2018 - April 2022",
      points: [
        "Conducted extensive quality control analyses on bacterial samples, generating accurate reports for the team.",
        "Led the identification and analysis of bacterial contaminants, improving overall product quality.",
        "Trained new team members on clearance procedures, ensuring a smooth transition into their roles.",
        "Isolated key bacterial species for research purposes, contributing to the development of new products.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Trello Clone",
      description:
        "Web-based platform that allows a user to create, update and delete a todo application. Additionally a picture storage function is added to allow the user to add photos of their tasks.",
      tags: [
        {
          name: "nextJS",
          color: "blue-text-gradient",
        },
        {
          name: "zustand",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: trelloclone,
      source_code_link: "https://github.com/SamBithrey/trello-clone",
    },
    {
      name: "Google Shopping",
      description:
        "Web application emulating the google shopping website. Built using a web scrapper allwoing users to filter their selections based on a variety of categories",
      tags: [
        {
          name: "nextJS",
          color: "blue-text-gradient",
        },
        {
          name: "webscrapper",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: googleshopping,
      source_code_link: "https://github.com/SamBithrey/next-google-shopping",
    },
    {
      name: "Weather App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextJS",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/SamBithrey/weather-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };