// ADD_PROJECT
export const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
}

//EDIT PROJECT

//REMOVE_PROJECT
export const removeProject = (id) => {
    return {
        type:'REMOVE_PROJECT',
        id
    }
}