import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SearchScreen = () => {
  return (
    <View>
      <Text style={styles.text}>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    position: "relative",
    top: 200,
    left: 150,
  },
});
