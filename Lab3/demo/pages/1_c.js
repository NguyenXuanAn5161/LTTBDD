import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { default as lock } from "../assets/lock-152879-1.png";
import { default as mail } from "../assets/mail-2935365-1.png";

export default function Cau1_c() {
  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <img src={lock} alt="Logo" />
        <Text style={{ fontWeight: "bold", fontSize: "36px", textAlign: "center" }}>
          {" "}FORGET PASSWORD{" "}
        </Text>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          inlineImageLeft={mail}
        />
      </View>
      <View style={{ flex: 0.3, alignItems: "center" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(180deg, #C7F4F6, #D1F4F6, #E5F4F5, #00CCF9)",
    justifyContent: "center",
    alignItems: "center",
  },
  textGroup: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20px",
  },
  button: {
    width: "320px",
    height: "50px",
    border: "1px solid #E3C000",
    padding: "5px",
    backgroundColor: "#E3C000",
    borderRadius: "10px",
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "30px",
  },
  textInput: {
    marginLeft: 20,
    width: 30,
    height: 40,
    width: 320,
    margin: 12,
    paddingLeft: 50,
    backgroundColor: "#C4C4C4",
    border: "3px solid #524f4e",
  },
});
