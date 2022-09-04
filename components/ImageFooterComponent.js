import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Icon } from "@rneui/base";

const ImageFooterComponent = () => {
  let size = 22;
  let margin = 8;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ margin: margin }}>
          <Icon name="favorite" color="white" size={size} />
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: margin }}>
          <Icon name="comment" color="white" size={size} />
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: margin }}>
          <Icon name="send" color="white" size={size} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ margin: margin }}>
          <Icon name="save" color="white" size={size} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageFooterComponent;

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
});
