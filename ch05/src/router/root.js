import { createBrowserRouter } from "react-router-dom";
import Welcome from "../component/sub1/Welcome";
import Greeting from "../component/sub1/Greeting";
import Hello from "../component/sub1/Hello";

// 라우팅 테이블
const root = createBrowserRouter([
  { path: "/sub4/hello", element: <Hello /> },
  { path: "/sub4/welcome", element: <Welcome /> },
  { path: "/sub4/greeting", element: <Greeting /> },
]);

// 라우터 내보내기
export default root;
