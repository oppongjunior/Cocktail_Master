import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = ({ navigation }) => {
  const allTasks = useSelector((state) => state.taskState);
  return (
    <View style={styles.container}>
      <FlatList
        data={allTasks.tasks}
        renderItem={({ item }) => (
          <TaskItem
            navigation={navigation}
            key={item.key}
            {...item}
            id={item.key}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TaskList;
