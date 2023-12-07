import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FaAngleLeft, FaRegUserCircle } from "react-icons/fa";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addItem, editItem } from "../../redux/actions";

const AddItem = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const { item, title } = route.params;
  const [updateItem, setUpdateItem] = useState(item || {});

  const handleFinish = () => {
    if (title === "ADD") {
      dispatch(addItem(updateItem));
    } else {
      dispatch(editItem(item.id, updateItem));
    }
    goBack();
  };

  const goBack = () => {
    navigation.goBack();
  };

  const currentYear = new Date().getFullYear();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.btn_back}>
          <Pressable style={styles.back} onPress={goBack}>
            <FaAngleLeft />
          </Pressable>
          <View style={{ flexDirection: "row" }}>
            <FaRegUserCircle />
            <Text style={{ fontSize: 20, fontWeight: 700, marginLeft: 10 }}>
              An
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View
          style={{
            marginVertical: "3%",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          {title} YOUR WORK
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.text_input}
            type="text"
            placeholder="Your work"
            value={updateItem.name}
            onChangeText={(text) =>
              setUpdateItem({ ...updateItem, name: text })
            }
          />
          {/* sử dụng react-native-element-dropdown để tạo dropdown ở đây với giá trị là type trong item được lưu trong redux toolkit */}
          <Pressable style={styles.btn_Finish} onPress={handleFinish}>
            <Text style={styles.txt_Finish}>Finish</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.footer}>&copy; {currentYear}</View>
    </View>
  );
};

export default AddItem;

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
  },
  input: {
    flex: 1,
    marginVertical: "5%",
    justifyContentc: "center",
    alignItems: "center",
  },
  text_input: {
    width: "90%",
    height: 50,
    fontSize: 30,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  btn_Finish: {
    width: "50%",
    backgroundColor: "green",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: "5%",
  },
  txt_Finish: {
    fontSize: 30,
    fontWeight: 700,
    color: "white",
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
