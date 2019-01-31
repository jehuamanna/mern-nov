const projectInitialState = []
const projectsReducer = (state = projectInitialState, action) =>{
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, action.project]
        case 'REMOVE_PROJECT':
            return state.filter(project => project.id != action.id)
        default : 
            return state
    }
}

export default projectsReducer