import React from "react";
import { TodoList } from "./components/todo-list/todo-list.component";
import { TodoSubmit } from "./components/todo-submit/todo-submit.component";

import "normalize.css";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        { text: "Clean the house🐼", completed: false },
        { text: "Meeting with John", completed: false },
        { text: "Go to the shop🛒", completed: false },
      ],
      emoji: [
        { label: "Document", sign: "📝" },
        { label: "Bed", sign: "🛌" },
        { label: "Time", sign: "⌚" },
        { label: "Knife", sign: "🔪" },
        { label: "Bomb", sign: "💣" },
        { label: "Holiday", sign: "🎉" },
        { label: "Gift", sign: "🎁" },
        { label: "Phone", sign: "📞" },
        { label: "Money", sign: "💰" },
        { label: "Shop cart", sign: "🛒" },
      ],
      inputValue: "",
      hidden: true,
    };
  }

  addItem = (event) => {
    event.preventDefault();

    const { value } = event.target.text;

    this.setState((state) => ({
      items: [...state.items, { text: value, completed: false }],
      inputValue: "",
      hidden: true,
    }));

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

  handleClick = (id) => {
    this.setState({
      items: this.state.items.map((item, index) => {
        if (index === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">TODO LIST</h1>
          <TodoSubmit
            addItem={this.addItem}
            inputValue={this.state.inputValue}
            emoji={this.state.emoji}
            handleChange={this.handleChange}
            addEmoji={this.addEmoji}
            hidden={this.state.hidden}
            toggleEmojiHidden={this.toggleEmojiHidden}
          />
          <TodoList
            items={this.state.items}
            complete={this.state.complete}
            handleClick={this.handleClick}
            removeItem={this.removeItem}
          ></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
