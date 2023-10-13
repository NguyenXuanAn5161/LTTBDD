import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function cau2_c() {
  const [password, setPassword] = React.useState("");
  const [passwordLength, setPasswordLength] = React.useState("12");

  const [successMessage, setSuccessMessage] = React.useState("");

  const [types, setTypes] = React.useState([]);
  const options = [
    "Include lower case letters",
    "Include upper case letters",
    "Include numbers",
    "Include symbols",
  ];

  const generatePassword = () => {
    let charset = "";
    let pass = "";

    types.forEach((typed) => {
      if (typed === "Include lower case letters") {
        charset += "abcdefghijklmnopqrstuvwxyz";
      }
      if (typed === "Include upper case letters") {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (typed === "Include numbers") {
        charset += "0123456789";
      }
      if (typed === "Include symbols") {
        charset += "!@#$%^&*()";
      }
    });

    for (let i = 0; i < parseInt(passwordLength); i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    console.log("gene đã được tạo ra tức thì: ", pass);

    setPassword(pass);
  };

  function pickType(selectedType) {
    if (types.includes(selectedType)) {
      setTypes(types.filter((item) => item !== selectedType));
    } else {
      setTypes([...types, selectedType]);
    }
  }

  const listOption = () => {
    return options.map((option) => {
      return (
        <View style={styles.type}>
          <Text style={styles.txtoptions}>{option}</Text>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => pickType(option)}
          >
            {types.includes(option) && <Text style={styles.check}>✓</Text>}
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.backgroundIn}>
          <Text style={styles.txtpassGenerator}>PASSWORD GENERATOR</Text>
          <TextInput
            value={password}
            style={[styles.txtpass, { display: password ? "flex" : "flex" }]}
          />
          <View style={styles.txtInput}>
            <Text style={styles.stltxt}>Password Length:</Text>
            <TextInput
              style={styles.txtpassLength}
              keyboardType="numeric"
              onChangeText={setPasswordLength}
              value={passwordLength}
            />
          </View>
          <View style={styles.txtInput}>
            <View style={styles.options}>{listOption()}</View>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.textButton} onPress={generatePassword}>
              Generate Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  buttonContainer: {
    backgroundColor: "#0033FF",
    width: "90%",
    marginTop: 100,
    height: 50,
    justifyContent: "center",
  },
  check: {
    alignSelf: "center",
    fontSize: 16,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginLeft: 30,
    marginRight: 25,
  },
  type: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  txtInput: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  txtpassLength: {
    height: 50,
    width: "60%",
    flexWrap: "wrap",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
    borderColor: "#fff",
    color: "#000",
    borderWidth: 2,
    paddingLeft: 10,
  },
  txtoptions: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 20,
    color: "#FFFFFF",
  },
  stltxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#DEE9FD",
  },
  backgroundIn: {
    flex: 1,
    backgroundColor: "#23235B",
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  txtpassGenerator: {
    flexWrap: "wrap",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#FFFFFF",
  },
  txtpass: {
    height: 50,
    width: "90%",
    flexWrap: "wrap",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 2,
    paddingLeft: 10,
  },
});
