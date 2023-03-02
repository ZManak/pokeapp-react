import React from "react";
import { shallow } from "enzyme";
import LocalDetail from "./localDetail";

describe("LocalDetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LocalDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
