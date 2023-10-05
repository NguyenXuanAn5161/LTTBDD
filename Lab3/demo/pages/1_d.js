import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cau_1d() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.middle}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={toggleShowPassword}
          >
            <Text style={styles.showPasswordText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middle1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
        <Text>Or login with</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttonLink}>
          <Text style={styles.buttonLinkText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLink}>
          <Text style={styles.buttonLinkText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLink}>
          <Text style={styles.buttonLinkText}>Google+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8EFDF",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  middle1: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
  textInput: {
    height: 45,
    width: 320,
    marginVertical: 5,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 30,
    borderRadius: 5,
  },
  passwordInputContainer: {
    position: "relative",
  },
  showPasswordButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  showPasswordText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#5D25FA",
  },
  button: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "#E3C000",
    backgroundColor: "#E53935",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D8EFDF",
  },
  forgotPasswordText: {
    color: "#5D25FA",
  },
  buttonLink: {
    marginHorizontal: 10,
  },
  buttonLinkText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#5D25FA",
  },
});
