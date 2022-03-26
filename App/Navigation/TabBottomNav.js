import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./Stacks/HomeStack";
import SearchStack from "./Stacks/SearchStack";
import FavoritesStack from "./Stacks/FavoritesStack";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const TabBottomNav = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 30,
          borderRadius: 25,
          height: 60,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        },
        tabBarLabel: () => null,
        tabBarLabelStyle: {
          marginBottom: 10,
          letterSpacing: 1,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? "#f46036" : "black"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={30}
              color={focused ? "#f46036" : "black"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="favorite-border"
              size={30}
              color={focused ? "#f46036" : "black"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabBottomNav;
