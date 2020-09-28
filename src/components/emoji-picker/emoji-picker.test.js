import React from "react";
import { shallow } from "enzyme";

import { EmojiPicker, emoji } from "./emoji-picker.component";

describe("Emoji picker", () => {
  const mockAddEmoji = jest.fn();
  const wrapper = shallow(<EmojiPicker addEmoji={mockAddEmoji} />);

  it("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("emoji list length should be equal emoji array length", () => {
    expect(wrapper.find(".emoji-picker").children().length).toEqual(
      emoji.length
    );
  });

  it("should call addEmoji on items click", () => {
    wrapper.find(".emoji-item").at(1).simulate("click");
    expect(mockAddEmoji).toHaveBeenCalled();
  });
});
