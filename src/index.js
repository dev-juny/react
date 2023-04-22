// 3rd party libary (제3자가 만든 소프트웨어 라이브러리 import)
import ReactDOM from 'react-dom/client';

//CSS
import './index.css';

//App으로 랜더링 될 특정 js , import할떄는 .js라는 확장자를 제외 
//App은 컴포넌트
//JSX임
import App from './App';

//ReactDOM에서 createRoot 메소드 호출.
//React를 사용하여 구축할 전체 사용자 인터페이스의 메인 엔트리 포인트 혹운 메인 훅을 생성
//React로 만들 사용자 인터페이스가 로딩되는 웹페이지의 어느 곳에 위치해야 하는지를 알려줌
const root = ReactDOM.createRoot(document.getElementById('root')); //index.html의 <div id="root"></div> 임 span이나 p도 가능하지만 div가 기본적임

//root객체에서 render 메소드를 호출하여 React에게 선택된 div에서 무엇이 렌더링 되어야 하는지 알려줌
//div 내부가 App으로 렌더링 됨
root.render(<App />);
