import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.text}>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    position: "relative",
    top: 200,
    left: 150,
  },
});
