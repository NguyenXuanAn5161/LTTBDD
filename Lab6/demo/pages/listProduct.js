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
  React.useEffect(() => {
    if (route.params?.post) {
      // nếu có tham số post thì sẽ làm gì đó
    }
  }, [route.params?.post]); // đoạn [] này là để chạy lại useEffect khi có tham số post thay đổi

  const Products = [
    {
      id: "1",
      title: "Pinarello",
      price: 269,
      discount: 10,
      description: "The Pinarello bike is a high-quality road bike...",
      image: require("../assets/bifour_-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: "2",
      title: "Trek FX 2",
      price: 189,
      discount: 5,
      description: "The Trek FX 2 is a versatile hybrid bike...",
      image: require("../assets/bione-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: "3",
      title: "Giant Talon 3",
      price: 2999,
      discount: 15,
      description: "The Giant Talon 3 is a top-tier mountain bike...",
      image: require("../assets/bithree_removebg-preview.png"),
      type: "mountain",
    },
    {
      id: "4",
      title: "Diverge Sport",
      price: 1999,
      discount: 0,
      description: "The Diverge Sport is a versatile gravel bike...",
      image: require("../assets/bitwo-removebg-preview.png"),
      type: "roadbike",
    },
    {
      id: "5",
      title: "Allez Sport",
      price: 879,
      discount: 10,
      description: "The Allez Sport is a classic road bike...",
      image: require("../assets/bike_1.png"),
      type: "mountain",
    },
    {
      id: "6",
      title: "Bianchi Oltre",
      price: 999,
      discount: 20,
      description: "The Bianchi Oltre is an elite road bike...",
      image: require("../assets/bike_2.png"),
      type: "roadbike",
    },
    {
      id: "7",
      title: "Electra Townie",
      price: 8939,
      discount: 10,
      description: "The Electra Townie is a comfortable cruiser bike...",
      image: require("../assets/bike_3.png"),
      type: "mountain",
    },
  ];

  const [ListProduct, setListProduct] = React.useState(Products);

  const [color, setColor] = React.useState(""); // Ban đầu không có màu nền

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
        <Pressable
          style={[styles.txtList, color === "" ? styles.selectedtype : null]}
          onPress={() => {
            setColor("");
            setListProduct(Products);
          }}
        >
          All
        </Pressable>
        <Pressable
          style={[
            styles.txtList,
            color === "roadbike" ? styles.selectedtype : null,
          ]}
          onPress={() => {
            setColor("roadbike");
            setListProduct(Products.filter((item) => item.type === "roadbike"));
          }}
        >
          Roadbike
        </Pressable>
        <Pressable
          style={[
            styles.txtList,
            color === "mountain" ? styles.selectedtype : null,
          ]}
          onPress={() => {
            setColor("mountain");
            setListProduct(Products.filter((item) => item.type === "mountain"));
          }}
        >
          Mountain
        </Pressable>
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
  selectedtype: {
    backgroundColor: "blue",
    color: "#fff",
  },
});
