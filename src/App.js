import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {addCustomerAction, removeCustomerAction} from "./store/model/reducer/customer";
import {customersAsync} from "./store/asyncThunks/customersAsync";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cashCount)
    const customers = useSelector(state => state.customer.custom)

    const removeCash = () => {
        dispatch({type: "ADD_CASH", payload: cash - 1})
    }
    const addCash = () => {
        dispatch({type: "REMOVE_CASH", payload: cash + 1})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }
    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    const showAll = (customers) => {
        dispatch(customersAsync(customers))
    }

    return (
        <div className="App">
            <button onClick={() => addCash()}>ДОБАВИТЬ</button>
            <span>{cash}</span>
            <button onClick={() => removeCash()}>УБРАТЬ</button>
            <br/>
            <br/>

            <button onClick={() => addCustomer(prompt())}>
                Добавть клиента
            </button>
            <button onClick={showAll}>
                Show all custom
            </button>

            {customers.length > 0 ?
                <div>
                    {customers.map(m => (
                        <ul>
                            <h2 key={m.id} onClick={() => removeCustomer(m)}>{m.name}</h2>

                        </ul>
                    ))}
                </div> :
                <div>
                    Клиенты отсутсвуют
                </div>
            }
        </div>
    );
}

export default App;