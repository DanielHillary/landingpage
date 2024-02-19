import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const HomePage = () => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <View style={styles.home}>
        <ImageBackground
          source={require("../assets/images/alpha.png")}
          resizeMode="cover"
          style={{ height: 500, width: screenWidth }}
        >
          <View style={{flex:1, backgroundColor: "#000000c0", alignItems: "center"}}>
            <Text style={styles.intro}>
              The ultimate aroma and taste, for blissful relaxation. Try
            </Text>
          </View>
        </ImageBackground>
      </View>
      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  intro: {
    color: COLORS.white,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    height: "auto",
    width: 500,
  },
  home: {
    flex: 1,
  },
});
