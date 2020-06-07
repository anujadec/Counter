import React from "react";
import { render } from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CounterButton from "./CounterButton";

const counterStyle = {
  fontSize: "48px",
  paddingLeft: "16px",
  paddingRight: "16px",
  verticalAlign: "middle"
};

class App extends React.Component {
  state = {
    counter: 0
  };
  addCounter = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  minusCounter = () => {
    if (this.state.counter > 0)
      this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  resetCounter = () => {
    this.setState(({ counter }) => ({ counter: 0 }));
  };
  render() {
    return (
      <div className="col-6 mx-auto text-center">
        <CounterButton value="+" functionName={this.addCounter} />
        <span style={counterStyle}>{this.state.counter}</span>
        <CounterButton value="-" functionName={this.minusCounter} />
        <div>
          <CounterButton value="Reset" functionName={this.resetCounter} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
