import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReelsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ReelsScreen</Text>
    </View>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    position: "relative",
    top: 200,
    left: 150,
  },
});
