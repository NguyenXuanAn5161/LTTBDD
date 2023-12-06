import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
// import HomePage from "./pages/homePage";
import DetailProduct from "./pages/detailProduct";
import ListProduct from "./pages/listProduct";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="model">
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="HomePage"
          component={HomePage}
        /> */}
        <Stack.Screen name="ListProduct" component={ListProduct} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
