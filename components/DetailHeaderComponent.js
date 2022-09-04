import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Header, HeaderProps } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const DetailHeaderComponent = () => {
  const navigation = useNavigation();

  return (
    <Header
      leftComponent={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="white" />
        </TouchableOpacity>
      }
      backgroundColor={"black"}
    />
  );
};

export default DetailHeaderComponent;

const styles = StyleSheet.create({
  headerLeft: {
    fontSize: 30,
    fontFamily: "Lobster_400Regular",
    width: 200,
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
});
