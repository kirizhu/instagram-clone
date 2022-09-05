import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ReelsScreen</Text>
    </View>
  );
};

export default ReelsScreen;

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
