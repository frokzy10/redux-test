const initialState = {
    custom: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {
                ...state, custom: [...state.custom, ...action.payload]
            }
        case ADD_CUSTOMER:
            return {...state, custom: [...state.custom, action.payload]}
        case REMOVE_CUSTOMER:
            return {
                ...state, custom: state.custom.filter(cus => cus.id !== action.payload)
            }

        default:
            return state
    }
}

const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})


export {
    addCustomerAction,
    removeCustomerAction,
    addManyCustomerAction
}

export {
    customerReducer
}