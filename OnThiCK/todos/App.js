import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import AddItem from "./src/pages/addItem/AddItem";
import Home from "./src/pages/home/Home";
import ListItem from "./src/pages/listItem/ListItem";
import Store from "./src/redux/store";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
}
