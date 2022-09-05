import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import App from "../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
// I was supposed to test the navigation but it complains that it cant find any elements comming from react-native-elements which I use in almost every component
describe("Testing react navigation", () => {
  test("Trying to test component with react-native-elemt import but fails to render", async () => {
    const component = <App />;
    render(component);
  });
});
