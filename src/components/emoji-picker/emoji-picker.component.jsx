import React from "react";

import { Picker } from "emoji-mart";

import "./emoji-picker.styles.scss";

export const EmojiPicker = ({ addEmoji }) => {
  return (
    <span className="emoji-picker">
      <Picker onSelect={addEmoji} autoFocus="false" />
    </span>
  );
};