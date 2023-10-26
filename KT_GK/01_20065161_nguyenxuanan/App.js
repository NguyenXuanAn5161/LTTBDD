import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Screen_01 from "./pages/Screen_01";
import Screen_02 from "./pages/Screen_02";
import Screen_03 from "./pages/Screen_03";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="model">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen_01"
          component={Screen_01}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen_02"
          component={Screen_02}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen_03"
          component={Screen_03}
        />
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
