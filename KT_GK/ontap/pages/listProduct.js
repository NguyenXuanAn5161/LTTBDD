import * as React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ListProduct({ navigation, route }) {
  const Products = [
    {
      id: "1",
      title: "Pinarello",
      price: 269,
      discount: 10,
      description:
        "The Pinarello bike is a high-quality road bike with a sleek and aerodynamic design. It features advanced components and is built for speed and performance. Whether you're a professional racer or a dedicated enthusiast, this bike will not disappoint. With a 10% discount, it's a fantastic deal for such a premium bike. The Pinarello bike is known for its precision engineering and attention to detail. It's the perfect choice for those who demand the best in their cycling experience.",
      image: require("../assets/bifour_-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: "2",
      title: "Trek FX 2",
      price: 189,
      discount: 5,
      description:
        "The Trek FX 2 is a versatile hybrid bike that excels on both city streets and rugged trails. It's designed for riders who want a bike that can handle a variety of terrains with ease. The FX 2 comes with a lightweight aluminum frame and a comfortable saddle, making it an excellent choice for long rides. With a 5% discount, it offers great value for a bike that can handle all your cycling adventures.",
      image: require("../assets/bione-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: "3",
      title: "Giant Talon 3",
      price: 2999,
      discount: 15,
      description:
        "The Giant Talon 3 is a top-tier mountain bike built for the most demanding off-road trails. Its rugged frame and high-quality components make it a favorite among mountain biking enthusiasts. With a 15% discount, it's a great deal for a bike that can conquer any terrain. The Talon 3 is designed for serious riders who crave adventure and want a bike that can keep up with their ambitions.",
      image: require("../assets/bithree_removebg-preview.png"),
      type: "mountain",
    },
    {
      id: "4",
      title: "Diverge Sport",
      price: 1999,
      discount: 0,
      description:
        "The Diverge Sport is a versatile gravel bike that's equally at home on winding country roads and challenging gravel paths. It's built to deliver a smooth and comfortable ride, thanks to its advanced suspension and ergonomic design. While it doesn't come with a discount, its quality and performance make it a top choice for gravel biking enthusiasts.",
      image: require("../assets/bitwo-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: "5",
      title: "Allez Sport",
      price: 879,
      discount: 10,
      description:
        "The Allez Sport is a classic road bike that combines timeless design with modern performance. It's perfect for riders who appreciate the elegance of a road bike and the thrill of high-speed cycling. With a 10% discount, it's an excellent option for those looking to enjoy the open road on a budget.",
      image: require("../assets/bike_1.png"),
      type: "mountain",
    },
    {
      id: "6",
      title: "Bianchi Oltre",
      price: 999,
      discount: 20,
      description:
        "The Bianchi Oltre is an elite road bike designed for riders who demand the absolute best. With its cutting-edge technology and superior craftsmanship, it's the epitome of high-performance cycling. The Oltre is a dream come true for professional racers and dedicated enthusiasts. With a 20% discount, it's a rare opportunity to own a masterpiece of engineering and design.",
      image: require("../assets/bike_2.png"),
      type: "roadbike",
    },
    {
      id: "7",
      title: "Electra Townie",
      price: 8939,
      discount: 10,
      description:
        "The Electra Townie is a comfortable cruiser bike built for leisurely rides through the city and along the coast. Its relaxed riding position and comfortable features make it a popular choice for riders seeking a laid-back cycling experience. With a 10% discount, it's an affordable option for those who want to enjoy the simple pleasures of cycling.",
      image: require("../assets/bike_3.png"),
      type: "mountain",
    },
  ];

  const [listProduct, setListProduct] = React.useState(Products);
  const [color, setColor] = React.useState("");

  const renderListProduct = ({ item }) => (
    <TouchableOpacity
      style={[styles.cardProduct]}
      onPress={() => {
        navigation.navigate({
          name: "DetailProduct",
          params: { post: item },
          merge: true,
        });
      }}
    >
      <Image style={[styles.bikeImg]} source={item.image} />
      <Text style={styles.bikeTitle}>{item.title}</Text>
      <Text style={[styles.bikePrice, styles.bikeTitle]}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>The world’s Best Bike</Text>
      <View style={styles.cList}>
        <Pressable
          style={[styles.list, color === "" ? styles.selected : null]}
          onPress={() => {
            setColor("");
            setListProduct(Products);
          }}
        >
          All
        </Pressable>
        <Pressable
          style={[styles.list, color === "Roadbike" ? styles.selected : null]}
          onPress={() => {
            setColor("Roadbike");
            setListProduct(Products.filter((item) => item.type === "roadbike"));
          }}
        >
          Roadbike
        </Pressable>
        <Pressable
          style={[styles.list, color === "Mountain" ? styles.selected : null]}
          onPress={() => {
            setColor("Mountain");
            setListProduct(Products.filter((item) => item.type === "mountain"));
          }}
        >
          Mountain
        </Pressable>
      </View>
      <View style={styles.cCard}>
        <FlatList
          showsHorizontalScrollIndicator={true}
          data={listProduct}
          renderItem={renderListProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  txtTitle: { marginLeft: "2%", fontSize: 20, color: "red", fontWeight: 600 },
  cList: {
    display: 1,
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 15,
    justifyContent: "space-around",
  },
  list: {
    fontSize: 16,
    borderWidth: 1,
    paddingVertical: 10,
    width: 85,
    textAlign: "center",
    borderRadius: 10,
  },
  cCard: {
    marginTop: 10,
    width: "100%",
    height: "100%",
  },
  cardProduct: {
    backgroundColor: "pink",
    marginTop: 10,
    marginHorizontal: "3%",
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
  bikeImg: {
    width: "97%",
    height: "70%",
    resizeMode: "contain",
  },
  bikeTitle: { fontSize: 16, fontWeight: 400, marginTop: 10 },
  selected: { backgroundColor: "blue", color: "#fff" },
});
