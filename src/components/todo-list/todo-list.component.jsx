import React from "react";

import "./todo-list.styles.scss";

export const TodoList = ({ items }) => {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li className="todo-item">{item}</li>
      ))}
    </ul>
  );
};
