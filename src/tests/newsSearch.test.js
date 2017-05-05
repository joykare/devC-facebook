import React from "react";
import { shallow } from "enzyme";
import shallowToJSON from "enzyme-to-json";
import NewsSearch from "../components/newsSearch";

describe("NewsSearch stateless component", () => {
  it("snapshot test of the component", () => {
    const component = shallow(<NewsSearch sources={[]}/>);
    let tree = shallowToJSON(component);
    expect(tree).toMatchSnapshot();
  })
})