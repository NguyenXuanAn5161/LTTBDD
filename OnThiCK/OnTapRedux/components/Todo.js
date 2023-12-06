// components/ToDo.js
import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAsync,
  removeTodoAsync,
  fetchTodos,
  editTodoAsync,
} from "../redux/actions";

const ToDo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);
  const [getjob, setGetJob] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]); // Include dispatch as a dependency

  const handleEdit = (id, updatedTodo) => {
    dispatch(editTodoAsync(id, updatedTodo));
    setEditingTodoId(null);
    setGetJob(""); // Reset giá trị sau khi chỉnh sửa
  };

  const handleItemClick = (id, todojob) => {
    setEditingTodoId(id);
    setGetJob(todojob);
  };

  return (
    <View style={{ marginTop: 100, flex: 1 }}>
      {/* TODO: Text Input */}
      <TextInput
        value={getjob}
        onChangeText={setGetJob}
        style={{ height: 50, borderWidth: 1 }}
        fontSize={20}
        placeholder="Enter your job"
      />

      {/* TODO: Pressable */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <Pressable
          onPress={() => {
            if (getjob !== "") {
              dispatch(addTodoAsync({ todojob: getjob }));
              setGetJob("");
            }
          }}
          style={{
            width: 100,
            height: 50,
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Add</Text>
        </Pressable>
        {/* TODO: clear  */}
        <Pressable
          onPress={() => {
            setGetJob("");
          }}
          style={{
            width: 100,
            height: 50,
            backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Clear</Text>
        </Pressable>
      </View>

      {/* TODO: Render Item */}
      <ScrollView>
        {todo &&
          todo.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handleItemClick(item.id, item.todojob)}
              style={{
                marginTop: 5,
                borderWidth: 1,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: "#EEF5FF",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  flex: 5,
                  marginLeft: 10,
                }}
              >
                {item.todojob}
              </Text>
              {/* TODO:  buttom actions */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Pressable
                  onPress={() => {
                    dispatch(removeTodoAsync(item.id));
                  }}
                  style={{
                    width: 100,
                    height: 50,
                    backgroundColor: "red",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Delete</Text>
                </Pressable>
                {/* TODO: Edit */}
                <Pressable
                  onPress={() => {
                    if (getjob !== "") {
                      handleEdit(item.id, { todojob: getjob });
                    }
                  }}
                  style={{
                    marginLeft: 10,
                    width: 100,
                    height: 50,
                    backgroundColor: "blue",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Edit</Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
};

export default ToDo;
