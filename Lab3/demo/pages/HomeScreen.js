import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("firstScreen")}
      >
        <Text style={styles.btnText}>First Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("A1")}
      >
        <Text style={styles.btnText}>1 a</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("B1")}
      >
        <Text style={styles.btnText}>1 b</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("C1")}
      >
        <Text style={styles.btnText}>1 c</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("D1")}
      >
        <Text style={styles.btnText}>1 d</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("E1")}
      >
        <Text style={styles.btnText}>1 e</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("A2")}
      >
        <Text style={styles.btnText}>2 a</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("XMEye")}
      >
        <Text style={styles.btnText}>XMEye</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btn: {
    backgroundColor: "#2196F3",
    width: 200,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
});
