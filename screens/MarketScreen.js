import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MarketScreen</Text>
    </View>
  );
};

export default MarketScreen;

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
