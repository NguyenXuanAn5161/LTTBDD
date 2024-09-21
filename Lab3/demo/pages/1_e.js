import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cau1_e() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}>
          {" "}
          REGISTER{" "}
        </Text>
      </View>
      <View style={styles.middle}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          textContentType="name"
          inputMode="text"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone"
          textContentType="telephoneNumber"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Birthday"
          textContentType="none"
          inputMode="text"
        />
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 50,
            }}
          >
            <TouchableOpacity>
              <View style={styles.radioButton}></View>
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>Male</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <View style={styles.radioButton}></View>
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>Female</Text>
          </View>
        </View>
      </View>
      <View style={styles.middle1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>REGISTER</Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8EFDF",
    width: "100%",
  },
  top: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  middle: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexShrink: 0.9,
    flexGrow: 0.9,
  },
  middle1: {
    flex: 0.3,
    alignItems: "center",
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "320px",
    height: "50px",
    borderWidth: 1,
    borderColor: "#E3C000",
    padding: 3,
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    color: "#D8EFDF",
  },
  textInput: {
    height: 45,
    width: 320,
    margin: 1,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 30,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 15,
  },
});
