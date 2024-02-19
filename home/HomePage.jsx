import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES } from "../constants";
import NavBar from "../components/NavBar";
import { FONT, loadThemeCustomFont } from "../constants/theme";
import Product from "../components/Product";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const HomePage = () => {
  useEffect(() => {
    loadThemeCustomFont();
  }, []);
  return (
    <View>
      <View style={styles.home}>
        <NavBar />
        <ImageBackground
          source={require("../assets/images/alpha.png")}
          // resizeMode="cover"
          style={{ justifyContent: "center", height: 500, width: screenWidth }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#000000c0",
              alignItems: "center",
            }}
          >
            <Text style={styles.intro}>
              The ultimate aroma and taste, for blissful
              <Text
                style={[
                  styles.intro,
                  { color: COLORS.darkyellow, marginLeft: 10 },
                ]}
              >
                relaxation.
              </Text>
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontFamily: FONT.regular,
                fontSize: SIZES.small,
                width: 600,
                textAlign: "center",
                marginTop: SIZES.large,
              }}
            >
              Elevate your tea experience and discover the perfect balance of
              tranquility and taste, sip by sip. Welcome to a journey where
              every cup is a celebration of serenity and indulgence.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{ flexDirection: "row", padding: 100, alignContent: "center", alignSelf: "center", rowGap: SIZES.small }}
      >
        <View style={{ width: 400, rowGap: SIZES.xSmall}}>
          <Text style={styles.brand}>About Brand</Text>
          <Text>
            Lakshimi started with a tea class that the representative, Yoko
            Toda, started at home. In 2005, “Lakshimi Tea Shop” opened in
            Kitano, Kobe.
          </Text>
          <Text>
            In 2008, we started to blend our own original tea. Initially, we
            started with only a few blends, but as we learned about the tastes
            and preferences of our customers, we gradually increased the number
            of original blends.
          </Text>
          <Text>
            In 2011, we developed our popular product, “Premium Honey Tea”. This
            tea was well-received by customers who enjoyed its sweet yet
            low-calorie content, making it a mainstay in our store.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#E16E4E",
              width: "45%",
              height: 40,
              borderRadius: SIZES.small,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{color: "white"}}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/Lakshimi.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <Product />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  brand: {
    color: "#E16E4E",
    fontSize: SIZES.xxLarge * 2,
  },
  intro: {
    color: COLORS.white,
    fontSize: SIZES.xxLarge * 2,
    fontFamily: "Oswald",
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 200,
    marginLeft: 100,
    width: 830,
  },
  home: {
    flex: 1,
    width: screenWidth,
  },
});
