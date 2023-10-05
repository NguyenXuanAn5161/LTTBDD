import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import logo from "../assets/round.png";
export default function firstscreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <img src={logo} alt="Logo" />
      </View>
      <View style={styles.TextSlogan}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
      </View>
      <View style={styles.Text1}>
        <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center" }}>
          We will help you to grow your business using {"\n"} online server{" "}
        </Text>
      </View>
      <View style={styles.Button1}>
        <Button title="LOGIN" color="#E3C000"></Button>
        <Button title="SIGN UP" color="#E3C000"></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "55px",
  },
  TextSlogan: {
    flex: 1,
    fontFamily: "Arial",
    justifyContent: "center",
    alignItems: "center",
  },
  Text1: {
    flex: 1,
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSizeL: "55px",
    justifyContent: "center",
  },
  Button1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "200px",
  },
});
