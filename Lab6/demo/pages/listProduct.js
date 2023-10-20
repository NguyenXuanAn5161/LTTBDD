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
  React.useEffect(() => {
    if (route.params?.post) {
      // nếu có tham số post thì sẽ làm gì đó
    }
  }, [route.params?.post]); // đoạn [] này là để chạy lại useEffect khi có tham số post thay đổi

  const [ListProduct, setListProduct] = React.useState([
    {
      id: "1",
      title: "Pinarello",
      price: 269,
      discount: 10, // Giả sử giảm giá 10%
      description:
        "The Pinarello bike is a high-quality road bike with a sleek and aerodynamic design. It features advanced components and is built for speed and performance. Whether you're a professional racer or a dedicated enthusiast, this bike will not disappoint. With a 10% discount, it's a fantastic deal for such a premium bike.",
      image: require("../assets/bifour_-removebg-preview.png"),
    },
    {
      id: "2",
      title: "Trek FX 2",
      price: 189,
      discount: 5, // Giả sử giảm giá 5%
      description:
        "The Trek FX 2 is a versatile hybrid bike suitable for various riding styles. It's perfect for commuting, fitness, or leisure rides. This bike offers comfort and performance, making it a great choice for riders of all levels. Enjoy a 5% discount on this fantastic all-around bike.",
      image: require("../assets/bione-removebg-preview.png"),
    },
    {
      id: "3",
      title: "Giant Talon 3",
      price: 2999,
      discount: 15, // Giả sử giảm giá 15%
      description:
        "The Giant Talon 3 is a top-tier mountain bike with advanced features. It's designed for the most demanding off-road trails and offers exceptional control and stability. If you're a mountain biking enthusiast, this bike is a must-have. Plus, you can enjoy a generous 15% discount on this high-performance mountain bike.",
      image: require("../assets/bithree_removebg-preview.png"),
    },
    {
      id: "4",
      title: "Diverge Sport",
      price: 1999,
      discount: 0, // Không giảm giá
      description:
        "The Diverge Sport is a versatile gravel bike designed for all terrains. It's equally comfortable on paved roads and rugged trails. With its durable construction and smooth ride, this bike is perfect for adventurers. While there is no discount on this model, its quality speaks for itself.",
      image: require("../assets/bitwo-removebg-preview.png"),
    },
    {
      id: "5",
      title: "Allez Sport",
      price: 879,
      discount: 10, // Giả sử giảm giá 10%
      description:
        "The Allez Sport is a classic road bike for enthusiasts and beginners. It's known for its lightweight frame and responsive handling, making it a great choice for road racing or casual rides. Grab this iconic bike with a 10% discount and experience the joy of road cycling.",
      image: require("../assets/bike_1.png"),
    },
    {
      id: "6",
      title: "Bianchi Oltre",
      price: 999,
      discount: 20, // Giả sử giảm giá 20%
      description:
        "The Bianchi Oltre is an elite road bike known for its speed, style, and precision. It's a favorite among professional cyclists and dedicated riders. With a 20% discount, it's a rare opportunity to own a bike of this caliber and enjoy the ultimate road cycling experience.",
      image: require("../assets/bike_2.png"),
    },
    {
      id: "7",
      title: "Electra Townie",
      price: 8939,
      discount: 10, // Giả sử giảm giá 10%
      description:
        "The Electra Townie is a comfortable cruiser bike designed for urban rides. It features a relaxed riding position and a stylish, retro look. With a 10% discount, you can cruise the city streets in style and comfort on this fantastic cruiser bike.",
      image: require("../assets/bike_3.png"),
    },
  ]);

  const renderListProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.cardProduct}
      onPress={() => {
        navigation.navigate({
          name: "DetailProduct",
          params: { post: item }, // tại sao không phải là params: {post: item.id}? vì item là 1 object, nên khi truyền vào params thì nó sẽ là 1 object, và khi truyền vào DetailProduct thì nó sẽ là 1 object có dạng {post: {id: "1", title: "Pinarello", price: 269, discount: 10, description: "The Pinarello bike is a high-quality road bike with a sleek and aerodynamic design. It features advanced components and is built for speed and performance. Whether you're a professional racer or a dedicated enthusiast, this bike will not disappoint. With a 10% discount, it's a fantastic deal for such a premium bike.", image: require("../assets/bifour_-removebg-preview.png")}}
          merge: true, // merge: true để khi quay lại màn hình DetailProduct thì nó sẽ merge params mới vào params cũ
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
