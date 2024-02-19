import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Product</Text>
        </View>
        
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
