import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen02({ navigation, route }) {
  // const [postText, setPostText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.phoneInformation}>
        <Image
          style={styles.Cimage}
          source={require("../assets/vs_blue.png")}
        />
        <Text style={[styles.titlePhone]}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View>
        <Text style={styles.txt}>Chọn một màu bên dưới:</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={[styles.boxColor, { backgroundColor: "#cf2c24" }]} />
          <View style={[styles.boxColor, { backgroundColor: "#244999" }]} />
          <View style={[styles.boxColor, { backgroundColor: "#e3d8de" }]} />
          <View style={[styles.boxColor, { backgroundColor: "#202228" }]} />
        </View>
        <Pressable
          style={styles.btnX}
          onPress={() => navigation.navigate("Screen01")}
        >
          <Text style={styles.btnText}>xong</Text>
        </Pressable>
      </View>
    </View>
    // <>
    //   <TextInput
    //     multiline
    //     placeholder="What's on your mind?"
    //     style={{ height: 200, padding: 10, backgroundColor: "white" }}
    //     value={postText}
    //     onChangeText={setPostText}
    //   />
    //   <Button
    //     title="Done"
    //     onPress={() => {
    //       // Pass and merge params back to home screen
    //       navigation.navigate({
    //         name: "Screen01",
    //         params: { post: postText },
    //         merge: true,
    //       });
    //     }}
    //   />
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
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
