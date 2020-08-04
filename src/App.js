import React from "react";
import { TodoList } from "./components/todo-list/todo-list.component";
import { TodoSubmit } from "./components/todo-submit/todo-submit.component";

import "normalize.css";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: ["Clean the house🐼", "Meeting with John", "Go to the shop🛒"],
      inputValue: "",
      hidden: true,
    };
  }

  addItem = (event) => {
    event.preventDefault();

    const { value } = event.target.text;

    this.setState({
      items: [...this.state.items, value],
      inputValue: "",
      hidden: true,
    });

    event.target.text.value = "";
  };

  addEmoji = (event) => {
    let emoji = event.target.textContent;
    this.setState({
      inputValue: this.state.inputValue + emoji,
    });
  };

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter((item, index) => {
        return index !== id;
      }),
    });
  };

  toggleEmojiHidden = () => {
    this.setState({ hidden: !this.state.hidden });
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
            addEmoji={this.addEmoji}
            hidden={this.state.hidden}
            toggleEmojiHidden={this.toggleEmojiHidden}
          />
          <TodoList
            items={this.state.items}
            removeItem={this.removeItem}
          ></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
