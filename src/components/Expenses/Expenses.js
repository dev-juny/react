import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }



    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {props.items.map(expenses =>
                //46. 데이터의 렌더링 목록
                <ExpenseItem
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />)}
        </Card>
    )

}

export default Expenses;