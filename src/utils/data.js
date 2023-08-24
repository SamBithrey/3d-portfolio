import { Query } from "appwrite";
import { databases } from "../appwrite";


const getServicesPromise = async () => {
    const data = await databases
        .listDocuments("64e72faa0030a85613c4", "64e72fc8430123067db9")    

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
        .listDocuments("64e72faa0030a85613c4", "64e76063b612f5be09cb")
    
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
        .listDocuments("64e72faa0030a85613c4", "64e76228513fd6608a22", [Query.orderDesc("startDate")])
    
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

export const getServices = await getServicesPromise()
export const getTechnologies = await getTechnologyPromise()
export const getExperiences = await getExperiencePromise()


