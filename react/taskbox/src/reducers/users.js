const userInitialState = []
const usersReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return [...state, action.user]
        case 'EDIT_USER':
            return state.map(user=>{
                if(user.id === action) {
                    return {...user, ...action.user}
                }
                else{
                    return user
                }
            })
        case 'REMOVE_USER':
            return state.filter(user=>{
                return user.id != action.id
            })
        default:
            return state
    }
}

export default usersReducer