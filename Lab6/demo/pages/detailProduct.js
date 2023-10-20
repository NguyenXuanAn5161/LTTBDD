import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DetailProduct({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.cImage}>
        <Image
          style={styles.bikeImage}
          source={require("../assets/bike_1.png")}
        ></Image>
      </View>
      <Text style={styles.bikeTitle}>Allez Sport</Text>
      <View style={styles.cPrice}>
        <Text style={[styles.bikePriceDiscount]}>15% off</Text>
        <Text style={[styles.bikePriceDiscounted]}>$879</Text>
        <Text style={[styles.bikePriceActual]}>$1999</Text>
      </View>
      <Text style={[styles.bikePriceDiscount, styles.txtDes]}>Description</Text>
      <Text style={[styles.txtDes, styles.txtMoTa]}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <View style={[styles.cBtn]}>
        {/* <Text style={[styles.txtBtn]}>*</Text> */}
        <Pressable
          style={[styles.btn]}
          onPress={() => {
            navigation.navigate({ name: "HomePage" });
          }}
        >
          add to card
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cImage: {
    margin: "2%",
    backgroundColor: "#fff",
    width: "96%",
    height: "50%",
    borderRadius: 10,
  },
  bikeImage: { width: "100%", height: "100%", resizeMode: "contain" },
  bikeTitle: { margin: "2%", fontSize: 28, fontWeight: "bold" },
  cPrice: { marginHorizontal: "2%", display: 1, flexDirection: "row" },
  bikePriceDiscount: {
    fontSize: 20,
    color: "gray",
    marginRight: 10,
    textTransform: "uppercase",
  },
  bikePriceDiscounted: {
    fontSize: 20,
    color: "gray",
  },
  bikePriceActual: {
    marginLeft: 20,
    fontSize: 20,
    color: "#000",
    textDecorationLine: "line-through",
  },
  txtDes: {
    marginHorizontal: "2%",
    marginTop: 20,
    color: "#000",
    fontWeight: 500,
  },
  txtMoTa: {
    color: "gray",
    fontSize: 18,
  },
  cBtn: {
    marginTop: 20,
    marginHorizontal: "2%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: "75%",
    height: 50,
    borderRadius: 50,
  },
  btn: { textTransform: "capitalize", fontSize: 20, color: "#fff" },
});
