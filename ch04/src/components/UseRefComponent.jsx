import { useRef } from "react";

function UseRefComponent() {
  // ref 선언, useRef 훅은 DOM 요소에 대한 참조값을 생성하는 함수
  const refUid = useRef(null);
  const refName = useRef(null);

  const btn1Handler = () => {
    //const uid = document.getElementById("uid");
    const value = refUid.current.value;
    alert("확인 : " + value);
  };
  const btn2Handler = () => {
    //const name = document.getElementById("name");
    const value = refName.current.value;
    alert("확인 : " + value);
  };

  return (
    <div className="UseRefComponent">
      <h4>UseRefComponent</h4>

      <p>
        <input type="text" name="uid" ref={refUid} />
        <button onClick={btn1Handler}>확인</button>
      </p>

      <p>
        <input type="text" name="name" ref={refName} />
        <button onClick={btn2Handler}>확인</button>
      </p>
    </div>
  );
}

export default UseRefComponent;
