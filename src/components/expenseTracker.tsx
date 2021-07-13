import React, {useState, useRef} from "react";
import './expenseTracker.css';

interface Transaction {
    value?: number;
    type?: string;
    dateTime?: string;
}


const ExpenseTracker = () => {
    const [balance, setBalance] = useState<number>(0);
    const [transactions, addTransactions] = useState<Transaction[]>([{
        value: 0,
        type: '',
        dateTime: '',
    }]);
    const expenseRef = useRef<any>(0);

    const addExpense = () => {
        if (+expenseRef.current.value > 0) {
            setBalance(balance + +expenseRef.current.value)
            addTransactions([...transactions, {
                value: +expenseRef.current.value,
                type: "Add",
                dateTime: new Date().toISOString()
            }]);
        } else {
            alert("Please enter a valid number other than zero")
        }
        expenseRef.current.value = '';
    }

    const removeExpense = () => {
        if (+expenseRef.current.value > 0) {
            let value = balance - expenseRef.current.value
            if (value < 0) {
                alert("Unable to make transaction Low fund!")
                return;
            }
            setBalance(value)
            addTransactions([...transactions, {
                value: +expenseRef.current.value,
                type: 'Remove',
                dateTime: new Date().toISOString()
            }]);
        } else {
            alert("Please enter a valid number other than zero")
        }
        expenseRef.current.value = '';
    }

    return (
        <div className="container">
            <h1>Expense Tracker Basic</h1>
            <div className="expense">
                <p>Balance : {balance}</p>
                <input type="number" min='0' ref={expenseRef} />
                <br/>
                <button className="expense-operations" onClick={addExpense}>Add</button>
                <button className="expense-operations" onClick={removeExpense}>Remove</button>
            </div>
            <div className="transactions">
                <p>Transactions :</p>
                <ul>
                    {transactions.map((result, key) => {
                        return result.value ?
                            <li key={key}>{result.dateTime} - {result.value} - {result.type}</li> : null
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ExpenseTracker;