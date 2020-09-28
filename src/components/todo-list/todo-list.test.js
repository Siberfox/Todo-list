import React from "react";
import { shallow } from "enzyme";

import { TodoList } from "./todo-list.component";

describe("Todo-list", () => {
  const mockItems = [
    { text: "first", completed: false, id: 1 },
    { text: "second", completed: false, id: 2 },
  ];
  const mockRemoveItem = jest.fn();
  const mockHandleClick = jest.fn();

  const wrapper = shallow(
    <TodoList
      items={mockItems}
      removeItem={mockRemoveItem}
      handleClick={mockHandleClick}
    />
  );

  it("should render todo-list component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("component have list from items props", () => {
    expect(wrapper.find("ul").children()).toHaveLength(2);
  });

  it("should call handleClick on click", () => {
    wrapper.find(".todo-item_text").at(1).simulate("click");
    expect(mockHandleClick).toHaveBeenCalled();
  });

  it("should remove item on click", () => {
    wrapper.find(".trash-icon").at(1).simulate("click");
    expect(mockRemoveItem).toHaveBeenCalled();
  });
});
