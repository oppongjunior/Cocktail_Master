import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Screens/Home";
import CategoryStack from "../../Screens/Stacks/CategoryStack";
import AlcoholicStack from "../../Screens/Stacks/AlcoholicStack";
import IngredientStack from "../../Screens/Stacks/IngredientStack";
import Details from "../../Screens/Stacks/Details";

const HomeStack = () => {
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
        headerTitle: "CockTail Master",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="viewcategories"
        component={CategoryStack}
        options={{
          headerTitle: "Categories",
        }}
      />
      <Stack.Screen
        name="viewalcoholics"
        component={AlcoholicStack}
        options={{
          headerTitle: "Alcoholics",
        }}
      />
      <Stack.Screen
        name="viewingredients"
        component={IngredientStack}
        options={{
          headerTitle: "Ingredients",
        }}
      />
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

export default HomeStack;
