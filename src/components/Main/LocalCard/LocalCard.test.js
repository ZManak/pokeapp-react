import React from "react";
import { shallow } from "enzyme";
import LocalCard from "./LocalCard";

describe("LocalCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LocalCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
