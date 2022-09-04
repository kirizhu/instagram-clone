import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen";
import MarketScreen from "../screens/MarketScreen";
import ReelsScreen from "../screens/ReelsScreen";
import SearchScreen from "../screens/SearchScreen";
import { Icon } from "@rneui/base";
import PageHeaderComponent from "../components/PageHeaderComponent";
import { HomeStack } from "./HomeStack";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "black",
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          switch (route.name) {
            case "HomeStack":
              iconName = "home";
              size = focused ? size + 8 : size + 2;
              break;
            case "Search":
              iconName = "search";
              size = focused ? size + 8 : size + 2;
              break;
            case "Reels":
              iconName = "ondemand-video";
              size = focused ? size + 8 : size + 2;
              break;
            case "Market":
              iconName = "shopping-bag";
              size = focused ? size + 8 : size + 2;
              break;
            case "Account":
              iconName = "account-circle";
              size = focused ? size + 8 : size + 2;
              break;

            default:
              break;
          }
          return <Icon name={iconName} size={size} color="white" />;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
