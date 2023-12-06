import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.cImage}>
        <Image
          style={styles.img}
          source={require("../assets/bifour_-removebg-preview.png")}
        />
      </View>
      <Text style={[styles.txtTitle, styles.txtTitleShop]}>
        power bike shop
      </Text>

      <Pressable
        style={styles.btn}
        onPress={() => {
          navigation.navigate({ name: "ListProduct" });
        }}
      >
        <Text style={[styles.txtBtn]}>get start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  txtTitle: { marginTop: 20, fontSize: 26, textAlign: "center" },
  cImage: {
    margin: "2%",
    width: "80%",
    height: "50%",
    backgroundColor: "pink",
    borderRadius: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: { width: "70%", height: "100%", resizeMode: "contain" },
  txtTitleShop: {
    fontWeight: 700,
    textTransform: "uppercase",
    flexWrap: "wrap",
    width: "40%",
  },
  btn: {
    backgroundColor: "red",
    width: "90%",
    padding: "20px",
    marginTop: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    fontSize: 30,
    color: "white",
    fontWeight: 500,
    textTransform: "capitalize",
  },
});
