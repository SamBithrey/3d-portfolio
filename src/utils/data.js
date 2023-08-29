import { Query } from "appwrite";
import { databases } from "../appwrite";

const db = import.meta.env.VITE_APPWRITE_DATABASE

const getServicesPromise = async () => {
    const data = await databases
        .listDocuments(db, import.meta.env.VITE_APPWRITE_SERVICES)    

    const documents = data.documents

    const services = documents.reduce((acc, document) => {
        acc.push({
            title: document.title,
            icon: new URL(document.icon)
        })
        return acc
    }, new Array)

    return services
}

const getTechnologyPromise = async () => {
    const data = await databases
        .listDocuments(db, import.meta.env.VITE_APPWRITE_TECHNOLOGIES)
    
    const documents = data.documents

    const technologies = documents.reduce((acc, document) => {
        acc.push({
            name: document.title,
            icon: new URL(document.icon)
        })
        return acc
    }, new Array)

    return technologies
}

const getExperiencePromise = async () => {
    const data = await databases
        .listDocuments(db, import.meta.env.VITE_APPWRITE_EXPERIENCE, [Query.orderDesc("startDate")])
    
    const documents = data.documents

    const experiences = documents.reduce((acc, document) => {
        acc.push({
            title: document.title,
            icon: new URL(document.icon),
            company_name: document.company_name,
            iconBg: document.iconBg,
            date: document.date,
            points: document.points
        })
        return acc
    }, new Array)

    return experiences
}

const getProjectsPromise = async () => {
    const data = await databases
        .listDocuments(db, import.meta.env.VITE_APPWRITE_PROJECTS)
    
    const documents = data.documents

    const projects = documents.reduce((acc, document) => {
        acc.push({
            name: document.name,
            image: new URL(document.image),
            company_name: document.company_name,
            tags: document.tags,
            source_code_link: new URL(document.source_code_link),
            description: documents.description
        })
        return acc
    }, new Array)

    return projects
}

export const getServices = await getServicesPromise();
export const getTechnologies = await getTechnologyPromise();
export const getExperiences = await getExperiencePromise();
export const getProjects = await getProjectsPromise();

