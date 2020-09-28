import React from "react";

import "./emoji-picker.styles.scss";

export const emoji = [
  { id: 1, label: "Document", sign: "📝" },
  { id: 2, label: "Bed", sign: "🛌" },
  { id: 3, label: "Time", sign: "⌚" },
  { id: 4, label: "Knife", sign: "🔪" },
  { id: 5, label: "Bomb", sign: "💣" },
  { id: 6, label: "Holiday", sign: "🎉" },
  { id: 7, label: "Gift", sign: "🎁" },
  { id: 8, label: "Phone", sign: "📞" },
  { id: 9, label: "Money", sign: "💰" },
  { id: 10, label: "Shop cart", sign: "🛒" },
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
          key={item.id}
        >
          {item.sign}
        </span>
      ))}
    </div>
  );
};
