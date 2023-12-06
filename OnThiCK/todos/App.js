import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddItem from "./src/pages/addItem/AddItem";
import Home from "./src/pages/home/Home";
import ListItem from "./src/pages/listItem/ListItem";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListItem"
          component={ListItem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
