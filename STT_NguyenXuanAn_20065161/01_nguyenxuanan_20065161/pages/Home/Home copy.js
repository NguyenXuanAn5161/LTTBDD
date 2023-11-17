import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const Home = ({ count, inc, dec }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Count:{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={[styles.button, styles.btnT]} onPress={dec}>
          <Text style={styles.txt}>-</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.btnC]} onPress={inc}>
          <Text style={styles.txt}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: "increment" }),
    dec: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    userSelect: "none",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    color: "white",
  },
  btnT: {
    backgroundColor: "red",
  },
});

// actions
var dec = { type: "decrement" };
var inc = { type: "increment" };

export default { dec, inc };
// reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
// import { createStore } from "redux";
// import reducer from "./reducer";
// store
// const store = createStore(reducer);

// export default store;



import { useState } from "react";
import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EditTodoList({ navigation, route }) {
  const { name } = route.params;
  console.log(name);

  const [jobInput, setJobInput] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon style={styles.backIcon} name="arrow-left"></Icon>
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.ImageUserContainer}>
            <Image
              style={styles.imageUser}
              source={require("../../assets/images/userIcon.png")}
            ></Image>
          </TouchableOpacity>
          <View style={styles.NameContainer}>
            <Text style={styles.nameText}>Hi {name}</Text>
            <Text style={styles.chaoText}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.ContainerAddText}>
        <Text style={styles.addText}>ADD YOUR JOB</Text>
      </View>

      <View style={styles.InputContainer}>
        <View style={styles.IconContainer}>
          <Icon style={styles.IconList} name="list" />
        </View>
        <TextInput
          style={styles.inputText}
          placeholder="input put your job"
          onChangeText={(text) => setJobInput(text)}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.FinishBtn}
        onPress={() =>
          navigation.navigate("TodoList", { name: name, newJob: jobInput })
        }
      >
        <Text style={styles.btnText}>FINISH</Text>
        <Icon style={styles.iconRight} name="arrow-right"></Icon>
      </TouchableOpacity>

      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/images/icon1.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
    alignItems: "center",
    justifyContent: "space-around",
  },
  HeaderContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBtn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 25,
    color: "#686b70",
  },
  profileContainer: {
    flexDirection: "row",
  },
  NameContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 2,
    marginLeft: 5,
    color: "#484c50",
  },
  chaoText: {
    color: "#848789",
  },
  ImageUserContainer: {
    // width: 100,
    height: 50,
  },
  imageUser: {
    width: 60,
    height: 60,
  },
  ContainerAddText: {
    width: "90%",
  },
  addText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  InputContainer: {
    width: "90%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d3d4d6",
    borderRadius: 10,
    height: 50,
  },
  IconContainer: {
    // width: 40,
    // height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  IconList: {
    width: 30,
    height: 30,
  },
  inputText: {
    width: "100%",
    fontSize: 20,
  },
  FinishBtn: {
    flexDirection: "row",
    backgroundColor: "#24c3d9",
    height: 45,
    width: "50%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
  iconRight: {
    color: "#fff",
    marginLeft: 10,
  },
  imgContainer: {
    width: "90%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
});



export default function Home({ navigation, route }) {
  const [name, setName] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/images/icon1.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>MANAGE YOUR{"\n"}TASK</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.IconContainer}>
          <Icon style={styles.Iconn} name="envelope" />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your name"
            placeholderTextColor={"#3333"}
            onChangeText={setName}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.StartBtn}
        onPress={() => navigation.push("TodoList", { name: name })}
      >
        <Text style={styles.btnText}>GET STARTED</Text>
        <Icon style={styles.iconBtn} name="arrow-right"></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
    alignItems: "center",
    justifyContent: "space-around",
  },
  ImageContainer: {
    width: "90%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "80%",
    height: "100%",
  },
  titleTextContainer: {
    width: "100%",
  },
  titleText: {
    textAlign: "center",
    color: "#825edb",
    fontSize: 25,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d5d6d8",
    borderRadius: 15,
  },
  IconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  Iconn: {
    fontSize: 20,
    // ba
  },
  textInputContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    // backgroundColor: 'red'
  },
  StartBtn: {
    backgroundColor: "#00bdd5",
    width: "40%",
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: "20%",
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
  },
  iconBtn: {
    fontWeight: "600",
    color: "#fff",
    padding: 5,
  },
  inputText: {
    width: "80%",
  },
});


import { useEffect } from "react";
import {
  ScrollView
} from "react-native";
import { CheckBox } from "react-native-elements";

export default function TodoList({ navigation, route }) {
  const [checkBox, setcheckBox] = useState(true);

  const [listJobs, setListJobs] = useState([
    { id: 1, jobName: "To check email", checkBox: true },
    { id: 2, jobName: "UI task web page", checkBox: true },
    { id: 3, jobName: "Learn javascript basic", checkBox: true },
    { id: 4, jobName: "Learn HTML Advance", checkBox: true },
    { id: 5, jobName: "Medial App UI", checkBox: true },
    { id: 6, jobName: "Learn Java", checkBox: true },
  ]);

  const { name } = route.params;
  console.log(name);

  useEffect(() => {
    const { params } = route;
    if (params && params.newJob) {
      const newJob = {
        id: listJobs.length + 1,
        jobName: params.newJob,
        checkBox: true,
      };

      setListJobs((prevList) => [...prevList, newJob]);
    }
  }, [route.params]);

  const handleCheckBoxChange = (itemId) => {
    const updatedList = [...listJobs];
    const itemIndex = updatedList.findIndex((item) => item.id === itemId);

    if (itemIndex != -1) {
      updatedList[itemIndex].checkBox = !updatedList[itemIndex].checkBox;
      setListJobs(updatedList);
    }
  };

  // search
  const [searchText, setSeacchText] = useState("");
  const filteredJobs = listJobs.filter((job) => {
    return job.jobName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon style={styles.backIcon} name="arrow-left"></Icon>
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.ImageUserContainer}>
            <Image
              style={styles.imageUser}
              source={require("../../assets/images/userIcon.png")}
            ></Image>
          </TouchableOpacity>
          <View style={styles.NameContainer}>
            <Text style={styles.nameText}>Hi {name}</Text>
            <Text style={styles.chaoText}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.IconSearchContainer}>
          <Icon name="search" size={20} color="#cfd2d8" />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          // value='searchText'
          onChangeText={setSeacchText}
        />
      </View>

      <View style={styles.listContainer}>
        <ScrollView style={[styles.listContainerr]}>
          {filteredJobs.map((listjob) => (
            <View style={styles.jobPr}>
              <View style={styles.jobpr1}>
                <CheckBox
                  checked={listjob.checkBox}
                  onPress={() => handleCheckBoxChange(listjob.id)}
                ></CheckBox>
                <Text style={styles.jobName}>{listjob.jobName}</Text>
              </View>
              <TouchableOpacity style={styles.editIconBtn}>
                <Image
                  style={styles.editIcon}
                  source={require("../../assets/images/editIcon.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => navigation.push("EditTodoList", { name: name })}
        style={styles.btnAdd}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
    alignItems: "center",
    justifyContent: "space-around",
  },
  HeaderContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBtn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 25,
    color: "#686b70",
  },
  profileContainer: {
    flexDirection: "row",
  },
  NameContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 2,
    marginLeft: 5,
    color: "#484c50",
  },
  chaoText: {
    color: "#848789",
  },
  ImageUserContainer: {
    // width: 100,
    height: 50,
  },
  imageUser: {
    width: 60,
    height: 60,
  },
  searchContainer: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#cfd2d8",
  },
  IconSearchContainer: {
    justifyContent: "center",
    alignItems: "center",
    // width: 50,
    // height: '100%',
    padding: 10,
  },
  iconimg: {
    width: 30,
    height: 30,
  },
  textInput: {
    width: "100%",
    fontSize: 22,
  },
  listContainer: {
    minHeight: 100,
    width: "90%",
    // backgroundColor: 'red',
  },
  listContainerr: {
    height: 300,
    minHeight: 300,
  },
  jobPr: {
    backgroundColor: "#e5e8ea",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  jobpr1: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  editIconBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  editIcon: {
    width: 30,
    height: 30,
    // padding: 10,
  },

  //
  btnAdd: {
    backgroundColor: "#25c3d9",
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  addText: {
    fontSize: 60,
    color: "#fff",
    fontWeight: "200",
  },
});
