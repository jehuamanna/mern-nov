import {createStore, combineReducers} from 'redux'
import projectsReducer from '../reducers/project'
import tasksReducer from '../reducers/tasks';

const configureStore = () =>{
    const store = createStore(combineReducers({
        projects: projectsReducer,
        tasks: tasksReducer
    }))
    return store
}

export default configureStore