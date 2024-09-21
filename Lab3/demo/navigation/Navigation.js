import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import A1 from "../pages/1_a";
import B1 from "../pages/1_b";
import C1 from "../pages/1_c";
import D1 from "../pages/1_d";
import E1 from "../pages/1_e";
import A2 from "../pages/2_a";
import firstScreen from "../pages/FirstScreen";
import HomeScreen from "../pages/HomeScreen";
import XMEye from "../pages/XMEye";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="firstScreen" component={firstScreen} />
        <Stack.Screen name="A1" component={A1} />
        <Stack.Screen name="B1" component={B1} />
        <Stack.Screen name="C1" component={C1} />
        <Stack.Screen name="D1" component={D1} />
        <Stack.Screen name="E1" component={E1} />
        <Stack.Screen name="A2" component={A2} />
        <Stack.Screen name="XMEye" component={XMEye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
