import React from "react";

import "./todo-submit.styles.scss";

import "emoji-mart/css/emoji-mart.css";
import { ReactComponent as EmojiIcon } from "../../assets/emoji.svg";
import { EmojiPicker } from "../emoji-picker/emoji-picker.component";

export const TodoSubmit = ({
  addItem,
  inputValue,
  handleChange,
  addEmoji,
  emoji,
  hidden,
  toggleEmojiHidden,
}) => {
  return (
    <form onSubmit={addItem} className="todo-submit">
      <input
        className="todo-submit_input"
        type="text"
        name="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="add todo..."
        required
      />
      <div className="emoji-icon" onClick={toggleEmojiHidden}>
        <EmojiIcon />
      </div>
      {hidden ? null : <EmojiPicker addEmoji={addEmoji} emoji={emoji} />}
      <button type="submit" className="todo-submit_button">
        Add
      </button>
    </form>
  );
};
