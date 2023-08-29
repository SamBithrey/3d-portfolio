import { getExperiences, getProjects, getServices, getTechnologies } from "../utils/data";
  
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
  
  const technologies = getTechnologies;
  
  const experiences = getExperiences;
  
  const projects = getProjects;
  
  export { services, technologies, experiences, projects };