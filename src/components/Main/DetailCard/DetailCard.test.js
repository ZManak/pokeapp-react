import React from "react";
import { shallow } from "enzyme";
import DetailCard from "./DetailCard";

describe("DetailCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
