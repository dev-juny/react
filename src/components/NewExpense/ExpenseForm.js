import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmonut, setEnteredAmonut] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        //39. 이전 State 에 의존하는 State Update 이전값을 덮어쓰기 위한 작업
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmonut(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    //40. 양식 제출 처리
    const submitHandler = (event) => {
        event.preventDefault(); //요청을 보내지 않음

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmonut,
            date: new Date(enteredDate)
        }

        console.log(expenseData);

        //41. 양방향 바인딩 추가
        setEnteredTitle('');
        setEnteredAmonut('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amonut</label>
                    <input type="number" value={enteredAmonut} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;