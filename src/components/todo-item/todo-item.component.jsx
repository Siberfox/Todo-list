import React from "react";

import "./todo-item.styles.scss";

export const TodoItem = ({ item }) => {
  return <li className="todo-item">{item}</li>;
};
