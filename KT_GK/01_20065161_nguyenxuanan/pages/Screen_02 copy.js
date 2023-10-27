import * as React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Screen02({ navigation, route }) {
  const { userName } = route.params;
  const listNV = [
    { id: 1, nv: "Check email" },
    { id: 2, nv: "Check account balance" },
    { id: 3, nv: "Update profile" },
    { id: 4, nv: "Create a new document" },
    { id: 5, nv: "Review project progress" },
    { id: 6, nv: "Schedule a meeting" },
  ];
  const [listJob, setListJob] = React.useState(listNV);

  React.useEffect(() => {
    if (route.params && route.params.listNV) {
      setListJob(route.params.listNV);
      console.log(route.params.listNV);
    }
  }, [route.params]);

  const renderListNV = ({ item }) => (
    <Pressable
      style={styles.taskContainer}
      onPress={() => {
        navigation.navigate("Screen_03", {
          listNV: listJob,
          jobToEdit: item, // Truyền công việc cần chỉnh sửa
        });
      }}
    >
      <Text style={styles.taskText}>{item.nv}</Text>
      <Image
        style={styles.taskImage}
        source={require("../assets/editIcon.png")}
      />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => {
            navigation.navigate("Screen_01");
          }}
        >
          <Text style={styles.backText}>Back</Text>
        </Pressable>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            source={require("../assets/userIcon.png")}
          />
          <Text style={styles.userName}>Hi {userName}</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../assets/searchIcon.png")}
        />
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={listJob}
        keyExtractor={(item) => item.id}
        renderItem={renderListNV}
        contentContainerStyle={styles.centeredTasks}
      />

      <View style={styles.addButtonContainer}>
        <Pressable
          style={styles.addButton}
          onPress={() => {
            navigation.navigate("Screen_03", { listNV: listJob, userName });
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "gray",
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    width: 70,
  },
  backText: {
    width: 70,
    fontSize: 20,
    textTransform: "uppercase",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  userName: {
    width: 200,
  },
  searchContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 40,
    marginHorizontal: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  searchInput: {
    fontSize: 23,
    marginLeft: 10,
  },
  centeredTasks: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  taskContainer: {
    marginTop: 10,
    width: 300,
    backgroundColor: "gray",
    height: 30,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  taskText: {
    marginLeft: 20,
  },
  taskImage: {
    width: "10%",
    height: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  addButton: {
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 25,
  },
});
