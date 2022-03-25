import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabBottomNav from "./TabBottomNav";

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabBottomNav />
    </NavigationContainer>
  );
};
export default Navigation;
