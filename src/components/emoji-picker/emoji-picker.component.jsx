import React from "react";

import "./emoji-picker.styles.scss";

const emoji = [
  { label: "Document", sign: "📝" },
  { label: "Bed", sign: "🛌" },
  { label: "Time", sign: "⌚" },
  { label: "Knife", sign: "🔪" },
  { label: "Bomb", sign: "💣" },
  { label: "Holiday", sign: "🎉" },
  { label: "Gift", sign: "🎁" },
  { label: "Phone", sign: "📞" },
  { label: "Money", sign: "💰" },
  { label: "Shop cart", sign: "🛒" },
];

export const EmojiPicker = ({ addEmoji }) => {
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
