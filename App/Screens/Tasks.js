import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../Component/TaskLists";
import { loadTasksFunc } from "../Redux/Tasks/TasksActions";
import { colors } from "../Utils/Colors";
import { FontSize } from "../Utils/FontSize";
import { margins } from "../Utils/spacing";

const Tasks = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeState);
  const allTasks = useSelector((state) => state.taskState);

  //useffect to load tasks
  useEffect(() => {
    dispatch(loadTasksFunc());
  }, []);

  //return View if task is loading
  if (allTasks.taskLoading) {
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.theme.background,
          padding: margins.ms_1,
        }}
      >
        <Text style={{ color: theme.theme.body, fontSize: FontSize.title }}>
          Loading...
        </Text>
      </View>
    );
  }

  //return view if there are no task
  if (allTasks.tasks.length === 0) {
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.theme.background,
          padding: margins.ms_1,
        }}
      >
        <Text style={{ color: theme.theme.body, fontSize: FontSize.title }}>
          No Task Has been Added
        </Text>
        {/* Open Modal Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Add")}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

  //return view for task screen
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.theme.background }}
    >
      {/*Task List */}
      <TaskList navigation={navigation} />
      {/* Open Modal Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    backgroundColor: colors.shared.s_color,
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Tasks;
