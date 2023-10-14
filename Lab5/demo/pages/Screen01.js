import * as React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen01({ navigation, route }) {
  // set default phone color
  if (!route.params?.post) {
    route.params = { post: "#244999" };
  }

  React.useEffect(() => {
    if (route.params?.post) {
      console.log("log: ", route.params?.post);
    }
  }, [route.params?.post]);

  const sourcePhoneImageColor = {
    "#cf2c24": require("../assets/vs_red.png"),
    "#244999": require("../assets/vs_blue.png"),
    "#e3d8de": require("../assets/vs_silver.png"),
    "#202228": require("../assets/vs_black.png"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.cImage}>
        <Image
          style={styles.vsBlue}
          contentFit="cover"
          source={sourcePhoneImageColor[route.params?.post]}
        />
      </View>
      <View style={styles.cInfomation}>
        <Text style={[styles.titlePhone, styles.muChnMu1Typo]}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.textRow}>
          <Text style={[styles.text, styles.textTypo]}>1.790.000 đ</Text>
          <Text style={[styles.text1, styles.textTypo]}>2.790.000 đ</Text>
        </View>
        <Text style={[styles.uRHn, styles.textTypo]}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
      </View>
      <Pressable
        style={styles.muChnMu}
        onPress={() => navigation.navigate("Screen02")}
      >
        <View style={styles.centeredContent}>
          <Text style={styles.textContent}>4 MÀU-CHỌN MÀU</Text>
          <View style={styles.iconContainer}>
            <AiOutlineRight />
          </View>
        </View>
      </Pressable>
      <View style={[styles.buttonContainer]}>
        <Button title="CHỌN MUA" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cInfomation: {
    flex1: 1,
  },
  titlePhone: {
    marginTop: 10,
    marginLeft: 10,
  },
  muChnMu1Typo: {
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    color: "#000",
    fontSize: 20,
  },
  muChnMu: {
    borderRadius: 5,
    padding: 10,
    border: "1px solid #000",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: "#000",
  },
  textContent: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: "#000",
  },
  textRow: {
    flexDirection: "row",
  },
  // iconContainer: {
  //   alignSelf: "flex-end",
  // },
  text: {
    marginTop: 10,
    marginLeft: 10,
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
  uRHn: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: "#fa0000",
  },
  text1: {
    marginTop: 10,
    marginLeft: 10,
    color: "rgba(0, 0, 0, 0.58)",
    fontSize: 15,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    textDecorationLine: "line-through",
  },
  textTypo: {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
  buttonContainer: {
    marginTop: 50,
    marginLeft: "5%",
    width: "90%",
  },
  groupChild: {
    left: 0,
    backgroundColor: "#ee0a0a",
    borderColor: "#ca1536",
    height: 44,
    width: 326,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    borderStyle: "solid",
  },
  chnMua: {
    top: 12,
    left: 106,
    fontSize: 20,
    color: "#f9f2f2",
  },
  vsBlue: {
    resizeMode: "contain", // Giữ nguyên tỷ lệ khung hình
    width: "100%", // Để hình ảnh vừa khớp với cImage
    height: "100%",
  },
  cImage: {
    width: "100%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0C0C0",
  },
});
