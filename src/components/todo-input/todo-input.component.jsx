import React from "react";

import "./todo-input.styles.scss";

export const TodoInput = () => {
  return (
    <div className="todo-input">
      <input
        className="todo-input_field"
        type="text"
        name="input"
        id="input"
        placeholder="add todo"
      />
      <button className="todo-input_button"> Add </button>
    </div>
  );
};
