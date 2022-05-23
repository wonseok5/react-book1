import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import Input from "../../src/03/Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input />);
    }).not.toThrow();
  });
});
