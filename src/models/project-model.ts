export enum EProjectType{
    None,
    Backend,
    Frontend,
    Fullstack,
    Videogame,
    MobileApp,
    Software,
    Library
}

export enum EProjectLanguage{
    C,
    CPlusPlus,
    Python,
    Java,
    Javascript,
    Typescript,
    SQL
}

export default interface ProjectModel{
    id: string,
    title: string,
    type: EProjectType
    language: EProjectLanguage,
    framework: string,
    deployment: string,
    description: string,
    repositry: string,
    image: string
}