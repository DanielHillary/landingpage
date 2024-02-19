import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: SIZES.small, marginHorizontal: SIZES.xxLarge * 3 }}>
        <View style={{ flexDirection: "row", gap: SIZES.large * 2, marginTop: SIZES.small, marginLeft: SIZES.medium }}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Product</Text>
        </View>
        <Image 
          source={require("../assets/icons/logoImage.png")}
          style={{height: 40, width: 40}}
        />
        <View style={{ flexDirection: "row", gap: SIZES.large * 2, marginTop: SIZES.small, marginRight: SIZES.medium }}>
          <Text>Features</Text>
          <Text>Awards</Text>
          <Text>FAQs</Text>
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
