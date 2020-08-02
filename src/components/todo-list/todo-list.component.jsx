import React from "react";
import { TodoItem } from "../todo-item/todo-item.component";

// import "./todo-list.styles.scss";

export const TodoList = (props) => {
  return (
    <ul className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};
