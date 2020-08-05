import React from "react";

import "./emoji-picker.styles.scss";

export const EmojiPicker = ({ addEmoji, emoji }) => {
  return (
    <div className="emoji-picker">
      {emoji.map((item) => (
        <span
          className="emoji-item"
          onClick={addEmoji}
          role="img"
          aria-label={item.label}
        >
          {item.sign}
        </span>
      ))}
    </div>
  );
};
