import {createStore, combineReducers} from 'redux'
import projectsReducer from '../reducers/project'
import tasksReducer from '../reducers/tasks';
import usersReducer from '../reducers/users';

const configureStore = () =>{
    const store = createStore(combineReducers({
        projects: projectsReducer,
        tasks: tasksReducer,
        users: usersReducer
    }))
    return store
}

export default configureStore