import "./App.css";
import ContextParent from "./component/ContextParent";
import ContextUserList from "./component/ContextUserList";
import ContextUserRegister from "./component/ContextUserRegister";
import ReduxParent from "./component/ReduxParent";
import ReduxUserRegister from "./component/ReduxUserRegister";

/*
  날짜 : 2024/11/14
  이름 : 박수정
  내용 : ch06.리액트 상태 관리 실습
*/
function App() {
  return (
    <div>
      <h3>ch06.리액트 상태 관리</h3>
      <h4>Context API 실습</h4>
      <ContextParent />
      <ContextUserRegister />
      <ContextUserList />
      <h4>Redux 실습</h4>
      <ReduxParent />
      <ReduxUserRegister />
    </div>
  );
}

export default App;
