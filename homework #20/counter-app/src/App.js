import React from "react";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";
import { getUser, setUser } from "../src/modules/localStorage";
import "./App.css";

const storage = getUser("state");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = storage || {
      number: 0,
      step: 1,
      minValue: 0,
      maxValue: Number.MAX_SAFE_INTEGER,
    };
  }

  handleIncrease = () => {
    if (this.state.number + this.state.step > this.state.maxValue) {
      return;
    }

    this.setState((state) => ({
      number: state.number + state.step,
    }));
  };

  handleDecrease = () => {
    if (this.state.number - this.state.step < this.state.minValue) {
      return;
    }

    this.setState((state) => ({
      number: state.number - state.step,
    }));
  };

  handleReset = () => {
    this.setState((state) => ({
      number: state.minValue,
    }));
  };

  handleMax = (event) => {
    if (event.target.value < 0) {
      event.target.value = 0;
    }

    this.setState({
      maxValue: Number(event.target.value) || Number.MAX_SAFE_INTEGER,
    });
  };

  handleMin = (event) => {
    if (event.target.value < 0) {
      event.target.value = 0;
    }

    this.setState({
      minValue: Number(event.target.value),
      number: Number(event.target.value),
    });
  };

  handleStep = ({ target }) => {
    if (target.value < 1 && target.value.length !== 0) {
      target.value = 1;
    }

    this.setState({
      step: Number(target.value) || 1,
    });
  };

  render() {
    setUser("state", this.state);

    return (
      <div className="app">
        <Display text={this.state.number} />
        <section className="coll">
          <Button text="⬆" onClick={this.handleIncrease} />
          <Button text="⬇" onClick={this.handleDecrease} />
          <Button text="Reset" onClick={this.handleReset} />
        </section>
        <section className="coll">
          <Input inText="Maximal" minVal={1} onChange={this.handleMax} />
          <Input inText="Minimal" minVal={0} onChange={this.handleMin} />
          <Input inText="Step" minVal={1} onChange={this.handleStep} />
        </section>
      </div>
    );
  }
}

export default App;
