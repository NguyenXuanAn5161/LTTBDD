import * as React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DetailProduct({ navigation, route }) {
  // dùng để hiển thị một hint khi người dùng scroll xuống dưới. false: không hiển thị hint
  const [showScrollHint, setShowScrollHint] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.cImage}>
        <Image
          style={styles.bikeImage}
          source={route.params?.post?.image}
        ></Image>
      </View>
      <Text style={styles.bikeTitle}>{route.params?.post?.title}</Text>
      <View style={styles.cPrice}>
        <Text style={[styles.bikePriceDiscount]}>
          {route.params?.post?.discount}% off
        </Text>
        <Text style={[styles.bikePriceDiscounted]}>
          ${route.params?.post?.price} {/*chua tinh duoc giam gia */}
        </Text>
        <Text style={[styles.bikePriceActual]}>
          ${route.params?.post?.price}
        </Text>
      </View>
      <Text style={[styles.bikePriceDiscount, styles.txtDes]}>Description</Text>
      <ScrollView style={styles.cDes}>
        <Text style={[styles.txtDes, styles.txtMoTa]}>
          {route.params?.post?.description}
        </Text>
      </ScrollView>
      <View style={[styles.cBtnHeart]}>
        <AiOutlineHeart style={styles.heart} />
        <Pressable
          style={[styles.cBtn, styles.btn]}
          onPress={() => {
            navigation.navigate({ name: "ListProduct" });
          }}
        >
          add to card
        </Pressable>
      </View>
    </View>
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
  cImage: {
    margin: "2%",
    backgroundColor: "#fff",
    width: "96%",
    height: "50%",
    borderRadius: 10,
  },
  bikeImage: { width: "100%", height: "100%", resizeMode: "contain" },
  bikeTitle: { margin: "2%", fontSize: 28, fontWeight: "bold" },
  cPrice: { marginHorizontal: "2%", display: 1, flexDirection: "row" },
  bikePriceDiscount: {
    fontSize: 20,
    color: "gray",
    marginRight: 10,
    textTransform: "uppercase",
  },
  bikePriceDiscounted: {
    fontSize: 20,
    color: "gray",
  },
  bikePriceActual: {
    marginLeft: 20,
    fontSize: 20,
    color: "#000",
    textDecorationLine: "line-through",
  },
  txtDes: {
    marginHorizontal: "2%",
    marginTop: 20,
    color: "#000",
    fontWeight: 500,
  },
  txtMoTa: {
    color: "gray",
    fontSize: 18,
  },
  cBtnHeart: {
    display: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  heart: { marginTop: 20, fontSize: 50 },
  cBtn: {
    marginTop: 20,
    marginHorizontal: "2%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: "75%",
    height: 50,
    borderRadius: 50,
  },
  btn: { textTransform: "capitalize", fontSize: 20, color: "#fff" },
});
