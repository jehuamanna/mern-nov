// state - [ {id: 1}, name: 'ani', email: 'ani@gmail.com']
const { createStore }= require('redux')
const store = createStore((state =[], action)=> {
switch(action){
    case "ADD_USER":
    return state.concat(action.user)
    case 'REMOVE_USER':
        return state.filter(user=> user.id !=action.id)

    case'EDIT_USER':
    return state.map(user => {
        if(user.id == action.id){
            // return Object.assign({}, user, action.user)
            return {
                ...user,
                ...action.user
            }
        }
    })
    default:
        return state
}

})

store.subscribe(()=>{
    console.log(store.getState())
})

function addUser(params){
    return {
        type:'ADD_USER',
        user: {
            id:params.id,
            name:params.name,
            email:params.email
        }
    }
}

function removeUser(id){
    return {
        type: 'REMOVE_USER',
        id
    }
}

function editUser(id, user){
    return {
        type: 'EDIT_USER',
        id,
        user
    }
}
store.dispatch(addUser({id:1, name: 'ani',email: 'ani@gmail.com'}))
store.dispatch(addUser({id:2, name: 'mani',email: 'mani@gmail.com'}))
store.dispatch(addUser({id:3, name: 'ravi',email: 'ravi@gmail.com'}))

store.dispatch(removeUser(2))
store.dispatch(editUser(3, {name: 'ravindranath'}))
