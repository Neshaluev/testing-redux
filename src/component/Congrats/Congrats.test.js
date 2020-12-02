import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import checkPropTypes from "check-prop-types";

import { findByTestAttr, checkProps } from "../../../Utils/tetsUtils";
import Congrats from "./Congrats";

const defaultProps = {
  success: false,
};

export const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

configure({ adapter: new Adapter() });

test("renders without error", () => {
  const wrapper = setUp();
  const componens = findByTestAttr(wrapper, "component-congrats");
  expect(componens.length).toBe(1);
});
test("renders no text when `success` props is false ", () => {
  const wrapper = setUp({ success: false });
  const componens = findByTestAttr(wrapper, "component-congrats");
  expect(componens.text()).toBe("");
});
test("renders non-empty congrats message when success props is true", () => {
  const wrapper = setUp({ success: true });
  const componens = findByTestAttr(wrapper, "congrats-message");
  expect(componens.text().length).not.toBe(0);
});
test("does not throw warning with expected props", () => {
  const expectedProps = { success: true };

  checkProps(Congrats, expectedProps);

  //   const propsError = checkPropTypes(
  //     Congrats.propTypes,
  //     expectedProps,
  //     "prop",
  //     Congrats.name
  //   );
  //   expect(propsError).toBeUndefined();
});
