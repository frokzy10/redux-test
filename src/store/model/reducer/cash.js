const initialState = {
    cashCount: 0
}

const cashReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return { ...state, cashCount: action.payload }
        case "REMOVE_CASH":
            return { ...state, cashCount: state.cashCount + action.payload }

        default:
            return state
    }
}



export {
    initialState,
    cashReducer
}