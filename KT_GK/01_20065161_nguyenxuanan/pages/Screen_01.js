import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Screen_01() {
  return (
    <View style={styles.container}>
      <View style={styles.cNote}>
        <Image style={styles.img} source={require("../assets/icon1.png")} />
      </View>
      <Text style={styles.txtTilte}>manage your task</Text>
      <Pressable style={styles.cInput}>
        <TextInput
          style={styles.txtInput}
          placeholder="Enter your name"
        ></TextInput>
      </Pressable>
      <Pressable style={styles.cBtn}>
        <Text style={styles.txtBtn}>get started -></Text>
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
  cNote: {
    marginTop: "10%",
    width: "70%",
    height: "40%",
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  img: { width: "99%", height: "99%" },
  txtTilte: {
    marginTop: 50,
    width: "60%",
    fontSize: 30,
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
    color: "purple",
  },
  cInput: { width: "80%", borderWidth: 1, borderRadius: 15, marginTop: 20 },
  txtInput: { padding: 10, color: "gray", fontSize: 20 },
  cBtn: {
    marginTop: 80,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    borderRadius: 10,
    backgroundColor: "blue",
  },
  txtBtn: {
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
    color: "#fff",
  },
});
