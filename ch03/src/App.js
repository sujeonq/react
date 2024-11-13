import logo from "./logo.svg";
import "./App.css";
import ClassTypeComponent from "./components/ClassTypeComponent";
import FunctionTypeComp from "./components/FunctionTypeComp";
import ParentComponenet from "./components/ParenetComponent";
/*
  날짜 : 2024/11/12
  이름 : 박수정
  내용 : ch03.리액트 컴포넌트
*/
function App() {
  return (
    <div className="App">
      <h3>ch03.리액트 컴포넌트</h3>

      <ClassTypeComponent />
      <FunctionTypeComp />
      <ParentComponenet />
    </div>
  );
}

export default App;
