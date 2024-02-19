import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../constants";

const Product = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 100,
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <View style={{ width: 400 }}>
          <Image
            source={require("../assets/images/selectedProduct1.png")}
            style={{ height: 200, width: "auto" }}
          />
          <Text style={styles.head}>Premium Honey Tea</Text>
          <Text>
            As a product delivered by a tea sommelier from a tea specialty shop,
            we have maximized the flavor of the tea leaves. We blend powdered
            multi-floral honey from Spain into the tea. The sweetness of the
            honey is so strong that there is no need to use sugar. Just one sip
            brings a feeling of happiness, a rich flavor. It’s a delicious tea,
            whether hot or iced, straight or as a milk tea.
          </Text>
        </View>
        <View style={{ width: 400 }}>
          <Image
            source={require("../assets/images/selectedProduct2.png")}
            style={{ height: 200, width: "auto" }}
          />
          <Text style={styles.head}>Premium Honey Lemon Tea</Text>
          <Text>
            Indulge in the harmonious blend of nature's finest ingredients with
            Lakshimi Premium Honey Lemon Tea. Crafted with meticulous care, this
            exquisite infusion combines the sweetness of pure honey, the zest of
            sun-kissed lemons, and the premium quality tea leaves to create a
            tea experience like no other. Elevate your tea ritual with Lakshimi
            Premium Honey Lemon Tea, where every sip is a celebration of taste
            and tranquility.
          </Text>
        </View>
        <View></View>
      </View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  head: {
    fontSize: SIZES.large,
  },
});
