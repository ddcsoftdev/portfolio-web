import axios from 'axios'


const getProjects = async (tags) =>{
    const endpoint = import.meta.env.VITE_API_BASE_URL;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": import.meta.env.GRAPHQL_TOKEN
    };

// Dynamically create the OR array structure from the tags dictionary
    const orConditions = Object.entries(tags).flatMap(([key, values]) =>
        values.map(value => `{${key}_contains: "${value}"}`)
    ).join(', ');

// Construct the where filter as a string
    const filters = `where: { OR: [ ${orConditions} ] }`;

    /* These are examples to filter with axios and Graphql
    Reference 1:
     `where : {language_contains : "Java"}

    Reference 2:
    `where : { OR: [
    { language_contains: "Java" },{ language_contains: "C++" }]}`;
    */


    const graphqlQuery = {
        "operationName": "getProjects",
        "query": `query getProjects {projects (${filters})  
                                                { id 
                                                projectName 
                                                description {text} 
                                                repository
                                                projectType
                                                language
                                                technology}}`,
        "variables": {}
    };
    try {
        const response = await axios({
            url: endpoint,
            method: 'post',
            headers: headers,
            data: graphqlQuery
        });
        return response.data.data.projects;
    } catch (err){
        console.log("Error getting data");
        throw err;
    }
}

export default getProjects;