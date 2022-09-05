import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

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
