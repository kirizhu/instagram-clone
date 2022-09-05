import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";

import { Icon } from "@rneui/base";
import { buttonAlert } from "./buttonAlert";

const ImageFooterComponent = () => {
  let size = 22;
  let margin = 8;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ margin: margin }}
          onPress={() => buttonAlert()}
        >
          <Icon name="favorite" color="white" size={size} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: margin }}
          onPress={() => buttonAlert()}
        >
          <Icon name="comment" color="white" size={size} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: margin }}
          onPress={() => buttonAlert()}
        >
          <Icon name="send" color="white" size={size} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ margin: margin }}
          onPress={() => buttonAlert()}
        >
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
