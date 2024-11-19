import { Component } from "react";
import ChildComponent from "./ChildComponent";

class LifeCycleComponent extends Component {
  state = {
    count: 0,
    isShow: true,
  };

  componentDidMount() {
    console.log("componentDidMount...");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate...");
    return true;
  }
  render() {
    //console.log("render...");
    return (
      <div className="LifeCycleComponent">
        <h4>LifeCycleComponent</h4>
        <p>
          count : {this.state.count}
          <br />
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            증가
          </button>
        </p>

        {this.state.isShow && <ChildComponent />}
        <p>
          <button
            onClick={() => {
              this.setState({ isShow: !this.state.isShow });
            }}
          >
            생성/제거
          </button>
        </p>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount...");
  }
}

export default LifeCycleComponent;
