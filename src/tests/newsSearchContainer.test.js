import React from "react";
import { shallow } from "enzyme";
import NewsSearchContainer from "../containers/newsSearchContainers";

describe("test NewsSearchContainer", () => {
  it("source state is initialized to an empty array", () => {
    const component = shallow(<NewsSearchContainer />);
    expect(component.state().sources).toEqual([]);
    expect(component.find('.loading').length).toEqual(1);    
    expect(component.find('NewsSearch').length).toEqual(0);
  });

  it("on set state source is populated with data", () => {
    const component = shallow(<NewsSearchContainer />);
    component.setState({
      sources: [
        {
          name: "hey",
          id: 1,
          url: "www.google.com"
        }
      ]
    })
    expect(component.find('.loading').length).toEqual(0);        
    expect(component.find('NewsSearch').length).toEqual(1);
  })
})