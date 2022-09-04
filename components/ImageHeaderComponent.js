import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { Icon } from "@rneui/base";

const ImageHeaderComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ margin: 10 }}>
          <Icon name="account-circle" color="white" size={26} />
        </TouchableOpacity>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.aliasText}>{item.author}</Text>
          <Text style={styles.locationText}>Place</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ margin: 10 }}>
          <Icon name="more" color="white" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageHeaderComponent;

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  aliasText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    position: "relative",
    top: 5,
  },
  locationText: { color: "white", fontSize: 12 },
});
