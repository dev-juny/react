import Expenses from "./components/Expenses/Expenses";

//App이라는 함수로 정의됨
//무언가를 반환하는 함수, HTML을 반환함
//일반적인 javascript구문이 아니지만 가능한 이유는 JSX때문임
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //JSX 소스 자바스크립트 XML을 의미함
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

//App이라는 이름으로 export함
export default App;
