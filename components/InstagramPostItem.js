import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ImageHeaderComponent from "./ImageHeaderComponent";
import ImageComponent from "./ImageComponent";
import ImageFooterComponent from "./ImageFooterComponent";
import { useNavigation } from "@react-navigation/native";

const InstagramPostItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { item })}
    >
      <ImageHeaderComponent item={item} />
      <ImageComponent item={item} />
      <ImageFooterComponent />
    </TouchableOpacity>
  );
};

export default InstagramPostItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 5,
  },
});
