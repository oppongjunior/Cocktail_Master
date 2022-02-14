import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../Utils/Colors";
import { Card, Title, Paragraph, TextInput, Button } from "react-native-paper";
import { margins, paddings } from "../Utils/spacing";
import { addTaskFunc } from "../Redux/Tasks/TasksActions";
import { Task_status } from "../Utils/TaskStatus";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const theme = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  //change title
  const onChangeTitle = (value) => {
    setTitle(value);
  };

  //change Time
  const onChangeTime = (value) => {
    const re = /^[0-9]*\.?[0-9]*$/;
    if (value === "" || re.test(value)) {
      setTime(value);
    }
  };

  //add task
  const onAdd = () => {
    if (title && time) {
      if (parseFloat(time) < 0.1) {
        //minimal time error
        Alert.alert("Invalid time", `Your time should be at least 0.1`, [
          {
            text: "ok",
          },
        ]);
        setTime("");
        return;
      }
      parseInt;
      const task = {
        key: Date.now(),
        title: title,
        time: parseFloat(time),
        timeLeft: parseFloat(time),
        status: {
          started: Task_status.started,
          ended: Task_status.end,
        },
        image: "",
      };
      //call the add task function
      dispatch(addTaskFunc(task));
      //alert for success
      Alert.alert(
        "Task Created",
        `${title} has been added successfully to your tasks`,
        [
          {
            text: "ok",
          },
        ]
      );
      //reset form
      setTime("");
      setTitle("");
      return;
    }
    //alert for success
    Alert.alert("Empty Form", `Please Fill the form before submit`, [
      {
        text: "ok",
      },
    ]);
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.theme.background }}
    >
      <Card>
        <Card.Content>
          <Title>Add a task you want to Focus on</Title>
          <View style={{ marginVertical: margins.m_1 }}>
            <Paragraph>Task Title</Paragraph>
            <TextInput
              mode="outlined"
              label="Enter here..."
              placeholder="Enter new task"
              right={<TextInput.Affix text="/100" />}
              outlineColor={colors.shared.s_color}
              value={title}
              onChangeText={onChangeTitle}
            />
          </View>
          <View style={{ marginVertical: margins.m_1 }}>
            <Paragraph>Task Period</Paragraph>
            <TextInput
              keyboardType="numeric"
              mode="outlined"
              label="Enter minutes here"
              placeholder="0.2"
              outlineColor={colors.shared.s_color}
              value={time}
              onChangeText={onChangeTime}
            />
          </View>
          <View style={{ marginVertical: margins.m_1 }}>
            <Button
              mode="contained"
              onPress={onAdd}
              color={colors.shared.s_color}
            >
              Add
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddings.ps_1,
    paddingTop: paddings.p_1,
  },
});

export default AddTask;
