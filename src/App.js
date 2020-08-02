import React from "react";
import { TodoList } from "./components/todo-list/todo-list.component";
import { TodoInput } from "./components/todo-input/todo-input.component";

import "normalize.css";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = { items: ["First", "Second", "Third"] };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">TODO LIST</h1>
          <TodoInput />
          <TodoList items={this.state.items}></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
