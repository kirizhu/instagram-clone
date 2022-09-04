import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import InstagramPostItem from "../components/InstagramPostItem";
import useAxios from "../utils/useAxios";

const HomeScreen = () => {
  const endpoint = `/v2/list`;
  const { response, loading, error } = useAxios({
    url: endpoint,
  });
  const renderItem = ({ item }) => {
    return <InstagramPostItem item={item} />;
  };

  return (
    <FlatList
      data={!loading && response}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id} ${index}`}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
