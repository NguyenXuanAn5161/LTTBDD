import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cau_1c() {
  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.title}>CODE</Text>
        <Text style={styles.subtitle}>VERIFICATION</Text>
        <Text style={styles.info}>
          Enter one-time password sent to +849092605798
        </Text>
      </View>
      <View style={styles.groupTextInput}>
        {Array(6)
          .fill()
          .map((_, index) => (
            <TextInput
              key={index}
              style={styles.textInput}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  textGroup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 60,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  info: {
    fontWeight: "bold",
    textAlign: "center",
  },
  groupTextInput: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  textInput: {
    height: 45,
    width: 45,
    margin: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "#E3C000",
    backgroundColor: "#E3C000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
