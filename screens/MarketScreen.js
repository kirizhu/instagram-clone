import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MarketScreen = () => {
  return (
    <View>
      <Text style={styles.text}>MarketScreen</Text>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    position: "relative",
    top: 200,
    left: 150,
  },
});
