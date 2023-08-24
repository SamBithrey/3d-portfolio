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
import { getExperiences, getServices } from "../utils/data";
  
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
  
  const services = getServices;
  
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
  
  const experiences = getExperiences;
  
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