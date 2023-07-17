import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("Clicked!!!")
    }


    /** 여기 있는것은 실제로 HTML 이 아니고
     * HTML처럼 보이기는 하지만 리액트 팀에서 만든 JSX구문이다.
     * 결국은 여전히 javascript 파일이다.
     * 그래서 class="" 가 아닌 className으로 사용한다.
     */
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
