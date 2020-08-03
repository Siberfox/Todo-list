import React from "react";

import "./todo-submit.styles.scss";

export const TodoSubmit = ({ addItem, inputValue, handleChange }) => {
  return (
    <form onSubmit={addItem} className="todo-submit">
      <input
        className="todo-submit_input"
        type="text"
        name="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="add a new todo..."
        required
      />
      <button type="submit" className="todo-submit_button">
        Add
      </button>
    </form>
  );
};
