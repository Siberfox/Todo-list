import React from "react";
import { TodoList } from "./components/todo-list/todo-list.component";
import { TodoSubmit } from "./components/todo-submit/todo-submit.component";

import "normalize.css";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = { items: ["First", "Second", "Third"], inputValue: "" };
  }

  addItem = (event) => {
    event.preventDefault();

    const { value } = event.target.text;

    this.setState({ items: [...this.state.items, value], inputValue: "" });

    event.target.text.value = "";
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">TODO LIST</h1>
          <TodoSubmit
            addItem={this.addItem}
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
          />
          <TodoList items={this.state.items}></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
