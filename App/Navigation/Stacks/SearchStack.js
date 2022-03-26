import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../Screens/Search";
import Details from "../../Screens/Stacks/Details";

const SearchStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6700",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "subTitleFont",
          letterSpacing: 1,
          color: "#fff",
          fontSize: 20,
        },
        headerTitle: "Search Cocktails",
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="details"
        component={Details}
        options={{
          headerTitle: "Detail",
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
