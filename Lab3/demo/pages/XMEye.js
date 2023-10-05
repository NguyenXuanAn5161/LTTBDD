import "boxicons";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function cau_XMEye() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/Group.png")}
        />
      </View>
      <View style={styles.middle}>
        <View>
          <box-icon
            style={{ marginBottom: -45, height: 40, zIndex: 1 }}
            name="user"
            type="solid"
            size="lg"
          ></box-icon>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            textContentType="username"
            inputMode="text"
          />
        </View>
        <View>
          <box-icon
            style={{ marginBottom: -45, height: 40, zIndex: 1 }}
            name="lock"
            size="lg"
          ></box-icon>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <box-icon
              style={{ marginTop: -45, marginLeft: 260, height: 40, zIndex: 1 }}
              name="show"
              type="solid"
              size="lg"
            ></box-icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middle1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            width: "320px",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Text style={styles.textLink}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textLink}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              borderTopColor: "#0E18F5",
              borderTopWidth: 2,
            }}
          >
            {" "}
          </Text>
          <Text
            style={{
              marginTop: -10,
              textAlign: "center",
              marginLeft: 3,
              marginRight: 3,
            }}
          >
            Orther Login Methods
          </Text>
          <Text
            style={{
              borderTopColor: "#0E18F5",
              borderTopWidth: 2,
            }}
          >
            {" "}
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <box-icon
            style={styles.buttonLink}
            type="logo"
            name="facebook"
            size="lg"
          ></box-icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <box-icon
            style={styles.buttonLink}
            name="twitter"
            type="logo"
            size="lg"
          ></box-icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <box-icon
            style={styles.buttonLink}
            type="logo"
            name="google-plus"
            size="lg"
          ></box-icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  top: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "flex-end",
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
    border: "1px solid #386FFC",
    padding: "5px",
    backgroundColor: "#386FFC",
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
    paddingLeft: "50px",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  buttonLink: {
    border: "1px solid #000000",
    width: 80,
    height: 80,
    margin: 20,
  },
  textLink: {
    color: "#000000",
  },
});
