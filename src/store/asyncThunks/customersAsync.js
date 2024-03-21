import axios from "axios";
import {addManyCustomerAction} from "../model/reducer/customer";

const customersAsync = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const data = res.data
                dispatch(addManyCustomerAction(data))
            })
    }
}
export {
    customersAsync
}