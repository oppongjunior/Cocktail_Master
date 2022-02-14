import React from "react";
import { View, StyleSheet } from "react-native";
import {useSelector} from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Tasks from "../Screens/Tasks";
import { colors } from "../Utils/Colors";
import { Appbar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { margins } from "../Utils/spacing";
import { FontSize } from "../Utils/FontSize";
import TaskDetails from "../Screens/TaskDetails";
import Focus from "../Screens/Focus";
import AddTask from "../Screens/AddTasks";

const HomeStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tasks"
        component={Tasks}
        options={{
          headerStyle: {
            backgroundColor: colors.shared.s_color,
          },
          title: "Tasks",
          header: () => (
            <Appbar.Header style={{ backgroundColor: colors.shared.s_color }}>
              <View style={{ marginLeft: margins.ms_1 }}>
                <FontAwesome
                  name="navicon"
                  size={FontSize.large}
                  color="#fff"
                  onPress={navigation.openDrawer}
                />
              </View>
              <Appbar.Content title="Tasks" color="#fff" />
            </Appbar.Header>
          ),
        }}
      />
      <Stack.Screen
        name="details"
        component={TaskDetails}
        options={{
          header: () => <BackToBar navigation={navigation} title="Details" />,
        }}
      />
      <Stack.Screen
        name="focus"
        component={Focus}
        options={{
          header: () => <BackToBar navigation={navigation} title="Focus" />,
        }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Add"
          component={AddTask}
          options={{
            header: () => (
              <BackToBar navigation={navigation} title="Add Task" />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BackToBar = ({ navigation, title }) => {
  return (
    <Appbar.Header style={{ backgroundColor: colors.shared.s_color }}>
      <Appbar.BackAction onPress={navigation.goBack} color="#fff" />
      <Appbar.Content title={title} color="#fff" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeStack;
