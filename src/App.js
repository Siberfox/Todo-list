import React from "react";
import todoList from "./components/todo-list/todo-list.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1> Todo list </h1>
        <input> Add </input>
        <todoList></todoList>
      </div>
    );
  }
}

export default App;
