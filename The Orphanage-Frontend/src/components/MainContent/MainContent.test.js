import React from "react";
import { shallow } from "enzyme";
import MainContent from "./MainContent";
import { findByTestAttr } from "./../../utils/index";

const setup = (props = {}) => {
  const component = shallow(<MainContent {...props} />);
  return component;
};

describe("Main content component", () => {
  let component;
  beforeEach(() => {
    const props = {
    };
    component = setup(props);
  });

  it("Should Render main content wrapper", () => {
    const wrapper = findByTestAttr(component, "main-content");
    expect(wrapper.length).toBe(1);
  });

});
