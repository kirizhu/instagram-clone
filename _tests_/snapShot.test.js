import * as React from "react";
import { create } from "react-test-renderer";
import AccountScreen from "../screens/AccountScreen";
import SearchScreen from "../screens/SearchScreen";
const AccountTree = create(<AccountScreen />);
const SearchTree = create(<SearchScreen />);
describe("Testing react components", () => {
  test("snapshot", () => {
    expect(AccountTree).toMatchSnapshot();
  });
  test("snapshot", () => {
    expect(SearchTree).toMatchSnapshot();
  });
});
