import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./model/reducer/cash";
import {customerReducer} from "./model/reducer/customer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))