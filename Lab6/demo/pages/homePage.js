import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.setTxt}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.cBackground}>
        <Image
          style={styles.cImage}
          source={require("../assets/xeDap_Xanh.png")}
        ></Image>
      </View>
      <Text style={[styles.setTxt, styles.txtTitle]}>power bike shop</Text>
      <Pressable style={styles.btnGS}>
        <Text style={[styles.txtBtn]}>get started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",
    // justifyContent: "center",
  },
  setTxt: {
    margin: 30,
    width: "75%",
    textAlign: "center",
    fontFamily: "VT323",
    fontStyle: "normal",
    fontSize: 20,
    color: "black",
  },
  cBackground: {
    backgroundColor: "#F7E5E4",
    width: "95%",
    height: "45%",
    borderRadius: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  cImage: {
    resizeMode: "contain", // Giữ nguyên tỷ lệ khung hình
    width: "70%", // Để hình ảnh vừa khớp với cImage
    height: "100%",
  },
  txtTitle: {
    textTransform: "uppercase",
    fontFamily: "Ubuntu-Bold",
    fontWeight: 700,
    fontSize: 26,
  },
  btnGS: {
    backgroundColor: "red",
    paddingVertical: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  txtBtn: {
    textTransform: "capitalize",
    fontSize: 26,
    color: "#FEFEFE",
    fontFamily: "VT323",
    fontWeight: 400,
  },
});
