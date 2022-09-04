import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { Image } from "@rneui/themed";

const ImageComponent = ({ item }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: item.download_url }}
        containerStyle={styles.item}
        PlaceholderContent={
          <ActivityIndicator
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          />
        }
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  item: {
    aspectRatio: 1,
    width: "100%",
  },
});
