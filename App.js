import React, { useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { BottomTabs } from "./navigation/BottomTabs";

import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "black",
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <BottomTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
