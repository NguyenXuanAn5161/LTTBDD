import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EditTodoList from "./pages/EditTodoList/EditTodoList";
import Home from "./pages/Home/Home";
import TodoList from "./pages/TodoList/TodoList";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="EditTodoList" component={EditTodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
