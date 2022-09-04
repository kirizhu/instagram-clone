import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Header, HeaderProps } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const PageHeaderComponent = () => {
  const navigation = useNavigation();
  console.log(navigation.getState());
  const headerLeftStyle = {
    fontSize: 30,
    color: "white",
    fontFamily: "Lobster_400Regular",
    width: 200,
  };

  return (
    <Header
      leftComponent={{
        text: "Instagram",
        style: headerLeftStyle,
      }}
      backgroundColor={"black"}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => console.log("pressed")}>
            <Icon type="material" name="add" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => console.log("pressed")}
          >
            <Icon type="material" name="favorite" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => console.log("pressed")}
          >
            <Icon type="material" name="send" color="white" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={<View />}
    />
  );
};

export default PageHeaderComponent;

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
