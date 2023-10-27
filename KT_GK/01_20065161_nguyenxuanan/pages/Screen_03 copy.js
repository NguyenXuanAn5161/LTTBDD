import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Screen03({ route, navigation }) {
  const { userName } = route.params;
  const { listNV, jobToEdit } = route.params;
  const [jobText, setJobText] = useState(jobToEdit ? jobToEdit.nv : "");

  return (
    <View style={styles.container}>
      <View style={styles.headerUser}>
        <Pressable
          style={styles.backButton}
          onPress={() => {
            navigation.navigate("Screen_02");
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
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {jobToEdit ? "Edit Your Job" : "Add New Job"}
        </Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Enter job description"
          value={jobText}
          onChangeText={(text) => setJobText(text)}
        />
        <Pressable
          style={styles.saveButton}
          onPress={() => {
            // Thực hiện cập nhật công việc hoặc thêm công việc mới vào danh sách listNV
            const updatedList = jobToEdit
              ? listNV.map((item) =>
                  item.id === jobToEdit.id ? { ...item, nv: jobText } : item
                )
              : [...listNV, { id: listNV.length + 1, nv: jobText }];

            // Chuyển quay lại màn hình số 2 và cập nhật danh sách công việc
            navigation.navigate("Screen_02", { listNV: updatedList });
          }}
        >
          <Text style={styles.saveButtonText}>
            {jobToEdit ? "Finish" : "Finish"}
          </Text>
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
  headerUser: {
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
  header: {
    marginTop: 20,
    width: "100%",
    height: 60, // Điều chỉnh chiều cao phù hợp
    justifyContent: "center", // Căn giữa văn bản
  },
  headerText: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 24,
    textAlign: "center",
    color: "black", // Thay đổi màu chữ
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 20,
    fontSize: 20,
    width: "80%", // Điều chỉnh chiều rộng phù hợp
  },
  saveButton: {
    borderRadius: 25,
    width: 150,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 25,
  },
});
