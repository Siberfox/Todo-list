import React from "react";

import { ReactComponent as TrashIcon } from "../../assets/Trash.svg";

import "./todo-list.styles.scss";

export const TodoList = ({ items, removeItem, handleClick }) => {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className="todo-item">
          <span
            className={`todo-item_text ${item.completed ? "hidden" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            {item.text}
          </span>
          <TrashIcon
            className="trash-icon"
            onClick={() => removeItem(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};
