import * as React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ListProduct({ navigation, route }) {
  const [ListProduct, setListProduct] = React.useState([
    {
      id: "1",
      title: "Pinarello",
      price: 269,
      image: require("../assets/bifour_-removebg-preview.png"),
    },
    {
      id: "2",
      title: "Trek FX 2",
      price: 189,
      image: require("../assets/bione-removebg-preview.png"),
    },
    {
      id: "3",
      title: "Giant Talon 3",
      price: 2999,
      image: require("../assets/bithree_removebg-preview.png"),
    },
    {
      id: "4",
      title: "Diverge Sport",
      price: 1999,
      image: require("../assets/bitwo-removebg-preview.png"),
    },
    {
      id: "5",
      title: "Allez Sport",
      price: 879,
      image: require("../assets/bike_1.png"),
    },
    {
      id: "6",
      title: "Bianchi Oltre",
      price: 999,
      image: require("../assets/bike_2.png"),
    },
    {
      id: "7",
      title: "Electra Townie",
      price: 8939,
      image: require("../assets/bike_3.png"),
    },
  ]);

  const renderListProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.cardProduct}
      onPress={() => {
        navigation.navigate({
          name: "DetailProduct",
        });
      }}
    >
      <Image style={styles.bikeImage} source={item.image} />
      <Text style={styles.bikeTitle}>{item.title}</Text>
      <Text style={styles.bikePrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cTxt}>The world’s Best Bike</Text>
      <View style={styles.cList}>
        <Text style={styles.txtList}>All</Text>
        <Text style={styles.txtList}>Roadbike</Text>
        <Text style={styles.txtList}>Mountain</Text>
      </View>

      <View style={styles.ListProduct}>
        <FlatList
          // horizontal={true}
          showsHorizontalScrollIndicator={true}
          data={ListProduct}
          renderItem={renderListProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cTxt: {
    marginTop: 8,
    marginLeft: 15,
    textTransform: "capitalize",
    color: "#E94141",
    fontFamily: "Ubuntu",
    fontSize: 28,
    fontWeight: "bold",
  },
  cList: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtList: {
    textAlign: "center",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: 4,
    width: 85,
    borderRadius: 5,
  },
  ListProduct: {
    marginTop: 10,
    // backgroundColor: "pink",
    borderRadius: 10,
    height: "100%",
  },
  cardProduct: {
    marginTop: 10,
    marginHorizontal: "3%",
    backgroundColor: "pink",
    width: "44%",
    height: 240,
    alignItems: "center",
    borderRadius: 10,
    // css shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  bikeImage: {
    width: "80%",
    height: "70%",
    resizeMode: "contain",
    // width: "100%",
    // height: "70%",
    // resizeMode: "stretch",
  },
  bikeTitle: {
    textTransform: "capitalize",
    fontSize: 25,
    fontFamily: "Voltaire",
    fontWeight: "normal",
  },
  bikePrice: {
    textTransform: "capitalize",
    fontSize: 20,
    fontFamily: "Voltaire",
    fontWeight: "normal",
  },
});
