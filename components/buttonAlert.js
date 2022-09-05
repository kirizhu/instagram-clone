import { Alert } from "react-native";

export const buttonAlert = () =>
  Alert.alert("You just pressed a button", "Unfortunatly it doesnt work", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
  ]);
