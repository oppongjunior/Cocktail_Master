import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors } from "../Utils/Colors";
import DrawerContent from "../Component/DrawerContent";
import HomeStack from "./HomeStack";

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="stack"
        component={HomeStack}
        options={{
          header:()=>null,
          headerStyle: {
            backgroundColor: colors.shared.s_color,
          },
          headerTintColor:"#fff",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default DrawerNav;
