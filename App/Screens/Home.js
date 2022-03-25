import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ingredients from "./TopTab/Ingredients";
import Category from "./TopTab/Category";
import Cocktails from "./TopTab/Cocktails";
import Alcholic from "./TopTab/Alcholic";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = ({navigation}) => {
  
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator
      screenOptions={{
        header: () => null,
        tabBarContentContainerStyle:{
            height:40,
        },
        tabBarLabelStyle:{
            letterSpacing:1,
            color: "#ff6700",
            fontWeight:"bold"
        },
        tabBarIndicatorStyle:{
            backgroundColor:"black"
        },
      }}
    >
      <TopTab.Screen name="Cocktails" component={Cocktails} />
      <TopTab.Screen name="Category" component={Category} />
      <TopTab.Screen name="Ingredients" component={Ingredients} />
      <TopTab.Screen name="Alcholic" component={Alcholic} />
    </TopTab.Navigator>
  );
};

export default Home;
