import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./component/sub1/Main";
import OutletMain from "./component/sub2/OutletMain";
/*
  날짜 : 2024/11/13
  이름 : 박수정
  내용 : ch05.리액트 라우터 실습
*/

function App() {
  return (
    <div className="App">
      <h3>ch05.React Router</h3>

      <h4>Router 기본</h4>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <hr />

      <h4>Router Outlet</h4>
      <BrowserRouter>
        <OutletMain />
      </BrowserRouter>
      <hr />

      <h4>Router 데이터 전송</h4>
      <hr />

      <h4>사용자 정의 Router</h4>
    </div>
  );
}

export default App;
