import axios from 'axios'


const getProjects = async (tags) =>{
    const endpoint = import.meta.env.VITE_API_BASE_URL;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": import.meta.env.GRAPHQL_TOKEN
    };

// Dynamically create the OR array structure from the tags dictionary
    const createQuery = (field) => {
        if (tags[field]) {
            return tags[field].map(value => `{${field}_contains: "${value}"}`).join(', ');
        } else {
            return '';
        }
    };


    const projectNameQuery = createQuery("projectName");
    const projectTypeQuery = createQuery("projectType");
    const languageQuery = createQuery("language");
    const technologyQuery = createQuery("technology");


// Construct the where filter as a string
    //const filters = `where: { OR: [ ${orConditions} ] }`;
//QUERY MAY BE WRONG
    const filters = `where: { AND: [
                              {OR: [${projectNameQuery}]},
                              {OR: [${projectTypeQuery}]},
                              {OR: [${languageQuery}]},
                             {OR: [${technologyQuery}]}
                              ]}`;

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