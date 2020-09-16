import React, { useState } from "react";
import { TodoList } from "./components/todo-list/todo-list.component";
import { TodoSubmit } from "./components/todo-submit/todo-submit.component";
import { nanoid } from "nanoid";

import "normalize.css";
import "./App.scss";

const App = () => {
  const [items, setItems] = useState([
    { text: "Clean the house🐼", completed: false, id: nanoid() },
    { text: "Meeting with John", completed: false, id: nanoid() },
    { text: "Go to the shop🛒", completed: false, id: nanoid() },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [hidden, setHidden] = useState(true);

  const addItem = (event) => {
    event.preventDefault();

    const { value } = event.target.text;

    setItems([...items, { text: value, completed: false, id: nanoid() }]);
    setInputValue("");
    setHidden(true);
  };

  const addEmoji = (event) => {
    let emoji = event.target.textContent;
    setInputValue(inputValue + emoji);
  };

  const removeItem = (id) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const toggleEmojiHidden = () => {
    setHidden(!hidden);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">TODO LIST</h1>
        <TodoSubmit
          addItem={addItem}
          inputValue={inputValue}
          handleChange={handleChange}
          addEmoji={addEmoji}
          hidden={hidden}
          toggleEmojiHidden={toggleEmojiHidden}
        />
        <TodoList
          items={items}
          handleClick={handleClick}
          removeItem={removeItem}
        ></TodoList>
      </div>
    </div>
  );
};

export default App;
