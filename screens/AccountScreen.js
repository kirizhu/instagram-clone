import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
