import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function DetailProduct({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.cImg}>
        <Image style={styles.img} source={route.params?.post?.image} />
      </View>
      <Text style={styles.txtTitle}>{route.params?.post?.title}</Text>
      <View>
        <Text style={styles.txtPrice}>{route.params?.post?.discount}</Text>
        <Text style={styles.txtPrice}>{route.params?.post?.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cImg: {
    margin: "2%",
    width: "96%",
    height: "40%",
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  img: { width: "90%", height: "100%", resizeMode: "contain" },
  txtTitle: {
    margin: "2%",
    fontSize: 30,
    fontWeight: 600,
    marginTop: 10,
  },
  cList: {
    display: 1,
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 15,
    justifyContent: "space-around",
  },
  list: {
    fontSize: 16,
    borderWidth: 1,
    paddingVertical: 10,
    width: 85,
    textAlign: "center",
    borderRadius: 10,
  },
  cCard: {
    marginTop: 10,
    width: "100%",
    height: "100%",
  },
  cardProduct: {
    backgroundColor: "pink",
    marginTop: 10,
    marginHorizontal: "3%",
    width: "44%",
    height: 240,
    alignItems: "center",
    borderRadius: 10,
    // css shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  bikeImg: {
    width: "97%",
    height: "70%",
    resizeMode: "contain",
  },
  bikeTitle: { fontSize: 16, fontWeight: 400, marginTop: 10 },
});
