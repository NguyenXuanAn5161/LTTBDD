import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Screen01 from "./pages/Screen_01";
import Screen02 from "./pages/Screen_02";
import Screen03 from "./pages/Screen_03";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="model">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen01"
          component={Screen01}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen02"
          component={Screen02}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen03"
          component={Screen03}
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
