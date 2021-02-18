import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StatusBar } from "react-native";
import Navigation from "./routes";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#030404" barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: "#030404" }}>
          <Navigation />
        </View>
      </NavigationContainer>
    </>
  );
}
