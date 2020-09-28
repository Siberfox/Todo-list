import React from "react";
import { shallow } from "enzyme";

import { TodoSubmit } from "./todo-submit.component";
import { EmojiPicker } from "../emoji-picker/emoji-picker.component";

describe("todo submit", () => {
  const mockAddItem = jest.fn();
  const mockHandleChange = jest.fn();
  const mockAddEmoji = jest.fn();
  const mockToggleEmojiHidden = jest.fn();

  const mockProps = {
    addItem: mockAddItem,
    inputValue: "todo",
    handleChange: mockHandleChange,
    addEmoji: mockAddEmoji,
    hidden: false,
    toggleEmojiHidden: mockToggleEmojiHidden,
  };

  const wrapper = shallow(<TodoSubmit {...mockProps} />);

  it("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("input field value should be props inputValue", () => {
    expect(wrapper.find("input").prop("value")).toEqual("todo");
  });

  it("should call handleChange on change", () => {
    wrapper.find("input").simulate("change");
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should call addItem on form submit", () => {
    wrapper.find("form").simulate("submit");
    expect(mockAddItem).toHaveBeenCalled();
  });

  it("show emoji picker when prop hidden is false", () => {
    expect(wrapper.exists(EmojiPicker)).toBe(true);
  });

  it("hidden emoji picker when prop hidden is true", () => {
    const mockHidden = true;
    const wrapper = shallow(<TodoSubmit hidden={mockHidden} />);

    expect(wrapper.exists(EmojiPicker)).toBe(false);
  });

  it("should call toggleEmojiHidden on click emoji icon", () => {
    wrapper.find(".emoji-icon").simulate("click");
    expect(mockToggleEmojiHidden).toHaveBeenCalled();
  });
});
