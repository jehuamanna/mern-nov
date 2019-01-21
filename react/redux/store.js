const { createStore, combineReducers} = require('redux')

const categoryInitialData = []
const categoriesReducer = (state=categoryInitialData, action) => {
    switch(action.type){
        case 'ADD_CATEGORY' :
        return [ ...state, action.category]
        default:
        return state
    }
}

const productsInitialData=[]
const productsReducer = (state=productsInitialData, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT' :
        return [...state, action.product]
        default :
        return state

    }
}


const store = createStore(combineReducers({
    categories: categoriesReducer,
    products: productsReducer
}))


function addCategory(category){
    return {
        type: 'ADD_CATEGORY',
        category
    }
}

function addProduct(product){
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

console.log(store.getState())


store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(addCategory({id: 1, name: 'sports'}))
store.dispatch(addProduct({id: 1, name: 'Scale', price:5}))