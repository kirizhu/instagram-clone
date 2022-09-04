import { StyleSheet, View } from "react-native";
import React from "react";
import useAxios from "../utils/useAxios";

import ImageComponent from "../components/ImageComponent";
import ImageHeaderComponent from "../components/ImageHeaderComponent";
import ImageFooterComponent from "../components/ImageFooterComponent";

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  let endpoint = `/id/${item.id}/info`;
  const { response, loading, error } = useAxios({
    url: endpoint,
  });
  return (
    <View style={styles.container}>
      <ImageHeaderComponent item={!loading && response} />
      <ImageComponent item={!loading && response} />
      <ImageFooterComponent />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 5,
  },
});
