import { Component } from "react";
import ChildComponenet from "./ChildComponent";

class ParentComponenet extends Component {
  render() {
    return (
      <div className="ParentComponenet">
        <h4>ParentComponenet</h4>
        <p>부모 컴포넌트 입니다.</p>
        {/* 자식 컴포넌트 출력 */}
        <ChildComponenet />
      </div>
    );
  }
}

export default ParentComponenet;
