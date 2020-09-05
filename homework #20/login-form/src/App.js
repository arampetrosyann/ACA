import React from "react";
import Input from "./components/Input/Input";
import Submit from "./components/Submit/Submit";
import Message from "./components/Message/Message";
import { getUser, setUser } from "./modules/localStorage";
import "./App.css";

const user = getUser("user");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      isNameValid: false,
      isPassValid: false,
      nameErrMessage: null,
      passErrMessage: null,
      showNameMessage: false,
      showPassMessage: false,
    };
  }

  hasAnySpaces = (str) => {
    const regAnySpaces = /\s/;

    return regAnySpaces.test(str);
  };

  containsLetter = (str) => {
    const regLetters = /[a-zA-Z]/;

    return regLetters.test(str);
  };

  limitText = (field, limitNum = 25) => {
    if (field.value.length > limitNum) {
      field.value = field.value.substring(0, limitNum);
    }
  };

  handleNameInput = ({ target }) => {
    this.limitText(target, 15);

    let message = null;

    let show = false;

    if (this.hasAnySpaces(target.value)) {
      message = "Whitespace is not allowed!";

      show = true;
    } else if (target.value.length < 5) {
      message = "Minimum 5 characters.";

      show = true;
    } else if (!this.containsLetter(target.value)) {
      message = "There are no letters!";

      show = true;
    }

    this.setState({
      name: target.value,
      nameErrMessage: message,
      showNameMessage: show,
      isNameValid: !show,
    });
  };

  handlePasswordInput = ({ target }) => {
    this.limitText(target, 20);

    let message = null;

    let show = false;

    if (this.hasAnySpaces(target.value)) {
      message = "Whitespace is not allowed!";

      show = true;
    } else if (target.value.length < 8) {
      message = "Minimum 8 characters.";

      show = true;
    } else if (!this.containsLetter(target.value)) {
      message = "There are no letters!";

      show = true;
    }

    this.setState({
      password: target.value,
      passErrMessage: message,
      showPassMessage: show,
      isPassValid: !show,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.isNameValid && this.state.isPassValid) {
      setUser("user", { name: this.state.name, pass: this.state.password });
    }
  };

  render() {
    return (
      <form className="login">
        <h2>LOGIN</h2>
        <label htmlFor="name">Username</label>
        <Input
          type="text"
          name="name"
          holder="Enter Username"
          onInput={this.handleNameInput}
        />
        {this.state.showNameMessage ? (
          <Message text={this.state.nameErrMessage} />
        ) : null}
        <label htmlFor="psw">Password</label>
        <Input
          type="password"
          name="psw"
          holder="Enter Password"
          onInput={this.handlePasswordInput}
        />
        {this.state.showPassMessage ? (
          <Message text={this.state.passErrMessage} />
        ) : null}
        <Submit
          value="Login"
          onClick={this.handleSubmit}
          disabled={
            this.state.isNameValid && this.state.isPassValid ? false : true
          }
        />
      </form>
    );
  }
}

export default App;
