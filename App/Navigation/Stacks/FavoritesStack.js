import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../../Screens/Favorites";
import Details from "../../Screens/Stacks/Details";

const FavoritesStack = () => {
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
        headerTitle: "My Favorites",
      }}
    >
      <Stack.Screen name="Favorites" component={Favorites} />
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

export default FavoritesStack;
