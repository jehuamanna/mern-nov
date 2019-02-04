const {createStore} = require('redux')


const store = createStore((state=[], action) => {
    switch (action.type) {
        case "ADD_USER" :
            return state.concat(action.user)
        case "EDIT_USER":
            return state.map(user =>{
                if(user.id === action.id){
                    console.log('ji"')
                    return Object.assign({}, user, action.user)
                    //return {...user,...action.user}
                    }
                    else{
                        return user
                    }
            })
        case "REMOVE_USER" :
            return state.filter(user => {
                return user.id != action.id
            })
        default: 
            return state
    }
})

store.subscribe(() => {
    console.log(store.getState())
})

function addUser(params){
    return {
        type: 'ADD_USER',
        user: {
            id: params.id,
            name: params.name,
            email: params.email
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
        type: "EDIT_USER",
        id,
        user
    }
}

store.dispatch(addUser({id:1, name: "jehu", email: "jehu@gmail.com"}))
store.dispatch(addUser({id:2, name:"jehushalom", email:"jehushalom"}))
store.dispatch(addUser({id:3, name:"Shalom", email:"jehuamanna"}))
store.dispatch(editUser( 2, { name:"bahu", email:"bali"}))
store.dispatch(removeUser(2))