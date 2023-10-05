import { FontAwesome } from "@expo/vector-icons"; // Assuming you are using FontAwesome for the eye icon
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CauSau() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [gender, setGender] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>LOGIN</Text>
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
          inputMode="numeric"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Birthday"
          textContentType="none"
          inputMode="text"
        />
        <View style={styles.genderContainer}>
          <TouchableOpacity
            onPress={() => handleGenderSelection("male")}
            style={[
              styles.genderButton,
              gender === "male" && styles.selectedGender,
            ]}
          >
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleGenderSelection("female")}
            style={[
              styles.genderButton,
              gender === "female" && styles.selectedGender,
            ]}
          >
            <Text>Female</Text>
          </TouchableOpacity>
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
    alignItems: "center",
  },
  top: {
    flex: 0.1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  middle: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  middle1: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 45,
    width: "80%",
    margin: 10,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 30,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  button: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#E3C000",
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#D8EFDF",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  genderButton: {
    width: "48%",
    height: 40,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedGender: {
    backgroundColor: "#000000",
  },
});
