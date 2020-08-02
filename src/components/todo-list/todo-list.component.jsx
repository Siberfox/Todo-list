import React from "react";
import { TodoItem } from "../todo-item/todo-item.component";
import { TodoInput } from "../todo-input/todo-input.component";

import "./todo-list.styles.scss";

export const TodoList = ({ items }) => {
  return (
    <ul className="todo-list">
      <h1 className="title">TODO LIST</h1>
      <TodoInput />
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
};