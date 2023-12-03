import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FaAngleLeft, FaRegUserCircle } from "react-icons/fa";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AddItem = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
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
        <View
          style={{
            marginVertical: "3%",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          EDIT YOUR WORK
        </View>
        <View style={styles.input}>
          <input
            style={styles.body_input}
            type="text"
            placeholder="Your work"
          />
          <TouchableOpacity style={styles.btn_Finish} onPress={goBack}>
            <Text style={styles.txt_Finish}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>Footer</View>
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
  body_input: {
    width: "90%",
    height: 50,
    fontSize: 30,
    padding: 5,
    borderRadius: 10,
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
