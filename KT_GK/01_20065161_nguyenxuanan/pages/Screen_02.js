import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Screen_02({ navigation, route }) {
  const { userName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: "pink", width: 100, height: 100 }}>
        {userName}
      </Text>
      <StatusBar style="auto" />
    </View>
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
