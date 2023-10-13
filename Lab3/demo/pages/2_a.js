import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";

export default function cau2_a() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const [username1, setUserName1] = useState("");
  const [password1, setPassWord1] = useState("");

  function check() {
    setUserName1(username);
    setPassWord1(password);
    if (username == "" || password == "") {
      alert("Login fail!");
    } else {
      alert("Login success!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "40px",
            textAlign: "center",
          }}
        >
          LOGIN
        </Text>
      </View>
      <SafeAreaView style={styles.middle}>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            textContentType="username"
            inputMode="text"
            onChangeText={setUserName}
            value={username}
          />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassWord}
            value={password}
          />
        </View>
        {/* <Text>Username1: {username1}</Text>
        <Text>Password1: {password1}</Text> */}
      </SafeAreaView>
      <View style={styles.middle1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onClick={check}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <a style={styles.textforget}>FORGET PASSWORD?</a>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          {/* <FontAwesomeIcon
            style={styles.buttonLink}
            type="logo"
            name="facebook"
            size="lg"
          ></FontAwesomeIcon> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <FontAwesomeIcon
            style={styles.buttonLink}
            name="twitter"
            type="logo"
            size="lg"
          ></FontAwesomeIcon> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <FontAwesomeIcon
            style={styles.buttonLink}
            type="logo"
            name="google-plus"
            size="lg"
          ></FontAwesomeIcon> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(190deg, #FBCB10, #BF9A40)",
    width: "100%",
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
  button: {
    width: "320px",
    height: "50px",
    border: "1px solid #000000",
    padding: "5px",
    backgroundColor: "#000000",
    borderRadius: "5px",
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "30px",
    color: "#ffffff",
  },
  textInput: {
    height: 45,
    width: 320,
    margin: 1,
    border: "1px solid #ffffff",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: "50px",
  },
  iconEmail: {
    border: "3px solid #524f4e",
    margin: 12,
    height: 40,
    backgroundColor: "#C4C4C4",
  },
  buttonLink: {
    border: "1px solid #000000",
    width: 100,
  },
  textforget: {
    fontSize: "20px",
  },
});
