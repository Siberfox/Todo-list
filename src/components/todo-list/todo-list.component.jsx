import React from "react";

import "./todo-list.styles.scss";

export const TodoList = ({ items }) => {
  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <li key={index} className="todo-item">
          {item}
        </li>
      ))}
    </ul>
  );
};
