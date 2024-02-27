import axios from 'axios'


const getProjects = async () =>{

    const endpoint = import.meta.env.VITE_API_BASE_URL;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": import.meta.env.GRAPHQL_TOKEN
    };
    const graphqlQuery = {
        "operationName": "getProjects",
        "query": `query getProjects {projects { id 
                                                title 
                                                description {text} 
                                                repository
                                                category
                                                stack}}`,
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