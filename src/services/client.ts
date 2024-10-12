import ProjectModel from '@/models/project-model'
import axios from 'axios'

const endpoint: any = process.env.NEXT_PUBLIC_API_URL
const headers = {
  'Content-Type': 'application/json',
  Authorization: process.env.NEXT_PUBLIC_GRAPHQL_TOKEN,
}

export const getProjectLanguages = async () => {
  const query = `
        query {
        __type(name: "ProjectLanguages") {
            enumValues {
                name
                }
            }
        }
        `;
        try {
            const response = await axios({
              url: endpoint,
              method: 'post',
              headers: headers,
              data: {
                query: query,
              },
            })
            return response
          } catch (err) {
            console.log('Error getting data')
            throw err
          }
}

export const getProjectFrameworks = async () => {
    const query = `
          query {
          __type(name: "ProjectFrameworks") {
              enumValues {
                  name
                  }
              }
          }
          `;
  
          try {
              const response = await axios({
                url: endpoint,
                method: 'post',
                headers: headers,
                data: {
                  query: query,
                },
              })
              return response
            } catch (err) {
              console.log('Error getting data')
              throw err
            }
  }

  export const getProjectTypes = async () => {
    const query = `
          query {
          __type(name: "ProjectTypes") {
              enumValues {
                  name
                  }
              }
          }
          `;
  
          try {
              const response = await axios({
                url: endpoint,
                method: 'post',
                headers: headers,
                data: {
                  query: query,
                },
              })
              return response
            } catch (err) {
              console.log('Error getting data')
              throw err
            }
  }

  export const getProjectDeployment = async () => {
    const query = `
          query {
          __type(name: "ProjectDeployment") {
              enumValues {
                  name
                  }
              }
          }
          `;
  
          try {
              const response = await axios({
                url: endpoint,
                method: 'post',
                headers: headers,
                data: {
                  query: query,
                },
              })
              return response
            } catch (err) {
              console.log('Error getting data')
              throw err
            }
  }

  export const getProjects = async (tags: any) => {
    // Dynamically create the filter array structure from the tags dictionary
    const createQuery = (field: string) => {
      if (tags && tags[field] && Array.isArray(tags[field])) {
        return tags[field]
          .map((value: any) => `{ ${field}_not: ${value} }`)
          .join(', ');
      }
      return '';
    };
  
    const typeQuery = createQuery('type');
    const frameworkQuery = createQuery('framework');
    const languageQuery = createQuery('language');
    const deploymentQuery = createQuery('deployment');
  
    // Construct the where filter as a string
    let filters = '';
  
    if (typeQuery || frameworkQuery || languageQuery || deploymentQuery) {
      filters = `where: { AND: [
        ${typeQuery ? `{ AND: [${typeQuery}] }` : ''}
        ${frameworkQuery ? `{ AND: [${frameworkQuery}] }` : ''}
        ${languageQuery ? `{ AND: [${languageQuery}] }` : ''}
        ${deploymentQuery ? `{ AND: [${deploymentQuery}] }` : ''}
      ] }`;
    }
  //(where: {AND: [{AND: [{ type_not: Fullstack }, { type_not: Software }, { type_not: Library }, { type_not: Backend }]}]}
    const query = `
    query {
      projects(${filters}) {
        id
        name
        type
        language
        framework
        deployment
        description {
          text
        }
        repository
        image {
          url
        }
      }
    }
  `;
  
    try {
      const response = await axios({
        url: endpoint,
        method: 'post',
        headers: headers,
        data: {
          query: query,
        },
      });
      return response;
    } catch (err) {
      console.log('Error getting data');
      throw err;
    }
  };


