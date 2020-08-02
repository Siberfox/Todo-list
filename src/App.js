import React from "react";
import { TodoList } from "./components/todo-list/todo-list.component";

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
        <TodoList items={this.state.items}></TodoList>
      </div>
    );
  }
}

export default App;
