import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageHeaderComponent from "../components/PageHeaderComponent";
import DetailHeaderComponent from "../components/DetailHeaderComponent";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        header: () =>
          route.name === "Home" ? (
            <PageHeaderComponent />
          ) : (
            <DetailHeaderComponent />
          ),
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
