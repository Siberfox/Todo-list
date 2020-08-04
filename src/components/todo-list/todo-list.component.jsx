import React from "react";

import { ReactComponent as TrashIcon } from "../../assets/Trash.svg";

import "./todo-list.styles.scss";

export const TodoList = ({ items, removeItem }) => {
  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <li key={index} className="todo-item">
          <span className="todo-item_text">{item}</span>
          <TrashIcon className="trash-icon" onClick={() => removeItem(index)} />
        </li>
      ))}
    </ul>
  );
};
