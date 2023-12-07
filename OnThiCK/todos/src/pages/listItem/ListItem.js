import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaEdit,
  FaPlus,
  FaRegUserCircle,
  FaTrash,
} from "react-icons/fa";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems, removeItem } from "../../redux/actions";

const ListItem = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todoApp);
  const [data, setData] = useState([]);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setData(todo);
  }, [todo]);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleGoScreen = (item) => {
    navigation.navigate("AddItem", { item, title: item ? "EDIT" : "ADD" });
  };

  const goBack = () => {
    navigation.goBack();
  };

  const [uniqueTypes, setUniqueTypes] = useState([]);

  useEffect(() => {
    const types = [...new Set(data.map((item) => item.type))];
    setUniqueTypes(types);
  }, [data]);

  const renderFilter = ({ item }) => {
    return (
      <TouchableOpacity style={styles.btn_filter}>
        <Text style={styles.txt_btn}>{item}</Text>
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
          <TouchableOpacity onPress={() => handleGoScreen(item)}>
            <FaEdit style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
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
            data={uniqueTypes}
            horizontal
            renderItem={renderFilter}
            keyExtractor={(item) => item}
            contentContainerStyle={{ flexGrow: 5 }}
          />
        </View>
        <ScrollView
          contentContainerStyle={{ width: "100%", alignItems: "center" }}
        >
          <View style={styles.list_item}>
            <FlatList
              data={data}
              numColumns={1}
              renderItem={renderItem}
              key={(item) => item.id}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.btn_add}
              onPress={() => handleGoScreen()}
            >
              <FaPlus />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>&copy; {currentYear}</View>
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
