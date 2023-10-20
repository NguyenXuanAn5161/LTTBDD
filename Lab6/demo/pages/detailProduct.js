import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DetailProduct({ navigation, route }) {
  const sourcePhoneImageColor = {
    "#cf2c24": require("../assets/vs_red.png"),
    "#244999": require("../assets/vs_blue.png"),
    "#e3d8de": require("../assets/vs_silver.png"),
    "#202228": require("../assets/vs_black.png"),
  };

  const [phoneColor, setPhoneColor] = React.useState(
    route.params?.post || "#244999"
  ); // set default phone color

  const changePhoneColor = (phoneColor) => {
    setPhoneColor(phoneColor);
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneInformation}>
        <Image
          style={styles.Cimage}
          source={sourcePhoneImageColor[phoneColor]}
        />
        <Text style={[styles.titlePhone]}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View>
        <Text style={styles.txt}>Chọn một màu bên dưới:</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pressable
            style={[styles.boxColor, { backgroundColor: "#cf2c24" }]}
            onPress={() => changePhoneColor("#cf2c24")}
          />
          <Pressable
            style={[styles.boxColor, { backgroundColor: "#244999" }]}
            onPress={() => changePhoneColor("#244999")}
          />
          <Pressable
            style={[styles.boxColor, { backgroundColor: "#e3d8de" }]}
            onPress={() => changePhoneColor("#e3d8de")}
          />
          <Pressable
            style={[styles.boxColor, { backgroundColor: "#202228" }]}
            onPress={() => changePhoneColor("#202228")}
          />
        </View>
        <Pressable
          style={styles.btnX}
          onPress={() => {
            navigation.navigate({
              name: "homePage",
              params: { post: phoneColor },
              merge: true,
            });
          }}
        >
          <Text style={styles.btnText}>xong</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C4C4",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    // alignItems: "center",
    // justifyContent: "center",
  },
  phoneInformation: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: "30%",
  },
  Cimage: {
    resizeMode: "contain", // Giữ nguyên tỷ lệ khung hình
    width: "50%", // Để hình ảnh vừa khớp với cImage
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titlePhone: {
    marginTop: 10,
    marginRight: 5,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    fontSize: 20,
  },
  txt: { marginLeft: 10, marginTop: 10, fontSize: 20 },
  boxColor: {
    width: 70,
    height: 70,
    margin: 10,
  },
  btnX: {
    backgroundColor: "#4d6dc1",
    margin: 20,
    borderRadius: 5,
    height: 40,
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: "#fff",
  },
});
