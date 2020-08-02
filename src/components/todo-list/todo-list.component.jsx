import React from "react";
import { todoItem } from "../todo-item/todo-item.component";

import "./todo-list.styles.scss";

export const todoList = (props) => {
  return (
    <ul className="todo-list">
      <todoItem />
      <todoItem />
      <todoItem />
    </ul>
  );
};
