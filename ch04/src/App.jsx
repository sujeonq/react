import "./App.css";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";
import UseReducerComponent from "./components/UseReducerComponent";

/*
  날짜 : 2024/11/12
  이름 : 박수정
  내용 : ch04.리액트 훅
*/

function App() {
  return (
    <>
      <h3>ch04.react hooks</h3>
      <h4>useRef()</h4>
      <UseRefComponent />

      <h4>useState()</h4>
      <UseStateComponent />

      <h4>useReducer()</h4>
      <UseReducerComponent />

      <h4>useEffect()</h4>
      <h4>useMemo()</h4>
      <h4>useCallback()</h4>
      <h4>Custom Hook()</h4>
    </>
  );
}

export default App;
