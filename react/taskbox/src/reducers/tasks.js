const taskInitialState = []
const tasksReducer = (state = taskInitialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.project]
        case 'REMOVE_TASK':
            return state.filter(task =>
                task.id != action.id)
        default:
                return state

    }
}

export default tasksReducer