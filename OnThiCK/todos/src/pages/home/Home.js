import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  // const [name, setName] = useState("");

  const navigation = useNavigation();

  const handleGoScreen = () => {
    navigation.navigate("ListItem");
  };

  const currentYear = new Date().getFullYear();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>Todos App</View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.btn_Go} onPress={handleGoScreen}>
          <Text style={styles.txt_Go}>GO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>&copy; {currentYear}</View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flex: 1 / 8,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: 700,
  },
  body: {
    flex: 6 / 8,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_Go: {
    width: "50%",
    backgroundColor: "green",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: "5%",
  },
  txt_Go: {
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
