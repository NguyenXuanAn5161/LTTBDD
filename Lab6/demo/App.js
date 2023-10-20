import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import DetailProduct from "./pages/detailProduct";
// import HomePage from "./pages/homePage";
import ListProduct from "./pages/listProduct";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="HomePage"
          component={HomePage}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="ListProduct"
          component={ListProduct}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailProduct"
          component={DetailProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
