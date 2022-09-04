import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "./navigation/BottomTabs";

import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
