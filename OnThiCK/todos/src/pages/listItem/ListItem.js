import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FaAngleLeft,
  FaEdit,
  FaPlus,
  FaRegUserCircle,
  FaTrash,
} from "react-icons/fa";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const ListItem = () => {
  const navigation = useNavigation();

  const handleGoScreen = () => {
    navigation.navigate("AddItem");
  };

  const goBack = () => {
    navigation.goBack();
  };

  const data = [
    { id: 1, name: "Javascript", type: "simple" },
    { id: 2, name: "ReactJS", type: "medium" },
    { id: 3, name: "React Native", type: "hard" },
  ];

  const renderFilter = ({ item }) => {
    return (
      <TouchableOpacity style={styles.btn_filter}>
        <Text style={styles.txt_btn}>{item.type}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.txt_item}>{item.name}</Text>
        <View
          style={{ marginHorizontal: 10, flexDirection: "row", fontSize: 30 }}
        >
          <TouchableOpacity>
            <FaEdit style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FaTrash style={{ color: "red" }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.btn_back}>
          <TouchableOpacity style={styles.back} onPress={goBack}>
            <FaAngleLeft />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <FaRegUserCircle />
            <Text style={{ fontSize: 20, fontWeight: 700, marginLeft: 10 }}>
              An
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.list_filter}>
          <FlatList
            data={data}
            horizontal
            renderItem={renderFilter}
            key={(item) => item.id}
          />
        </View>
        <View style={styles.list_item}>
          <FlatList
            data={data}
            numColumns={1}
            renderItem={renderItem}
            key={(item) => item.id}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.btn_add} onPress={handleGoScreen}>
            <FaPlus />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>Footer</View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  header: {
    flex: 1 / 8,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: 700,
  },
  btn_back: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
  },
  body: {
    flex: 6 / 8,
    backgroundColor: "pink",
    alignItems: "center",
  },
  list_filter: {
    width: "100%",
    height: 40,
    alignItems: "center",
    marginVertical: 10,
  },
  btn_filter: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    border: "1px solid black",
    borderRadius: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
  },
  txt_btn: {
    fontSize: 20,
    fontWeight: 700,
    color: "black",
  },
  list_item: {
    width: "90%",
    height: "auto",
  },
  item: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 20,
  },
  txt_item: {
    fontSize: 20,
    fontWeight: 700,
    flex: 1,
  },
  btn_add: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 90,
    fontSize: 30,
  },
  footer: {
    flex: 1 / 8,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: 700,
  },
});
