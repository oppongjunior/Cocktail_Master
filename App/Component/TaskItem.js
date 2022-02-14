import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../Utils/Colors";
import { FontSize } from "../Utils/FontSize";
import { margins, paddings } from "../Utils/spacing";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { deleteTaskFunc } from "../Redux/Tasks/TasksActions";

const TaskItem = (props) => {
  const { title, time, id, navigation } = props;
  const theme = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(deleteTaskFunc(id));
  };
  return (
    <View style={{ ...styles.container, padding: paddings.p_1 }}>
      <Card>
        <View style={{ padding: paddings.p_1 }}>
          <Text
            style={{
              ...styles.minutesText,
              color: "#000",
              textAlign: "center",
            }}
            numberOfLines={1}
          >
            {time} minutes
          </Text>
          <Text
            style={{
              ...styles.title,
              color: colors.shared.s_color,
              textAlign: "center",
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
        <Card.Actions
          style={{
            justifyContent: "space-between",
            marginHorizontal: margins.m_2,
          }}
        >
          <Ionicons
            name="eye-outline"
            size={FontSize.x_large}
            color="black"
            onPress={() =>
              navigation.navigate("details", {
                item: {
                  key: id,
                  title: title,
                  time: time,
                  timeLeft: props.timeLeft,
                  status: props.status,
                  image: props.image,
                },
              })
            }
          />
          <FontAwesome
            name="clock-o"
            size={FontSize.x_large}
            color="black"
            onPress={() =>
              navigation.navigate("focus", {
                item: {
                  key: id,
                  title: title,
                  time: time,
                  timeLeft: props.timeLeft,
                  status: props.status,
                  image: props.image,
                },
              })
            }
          />
          <Ionicons
            name="trash-outline"
            size={FontSize.x_large}
            color="black"
            onPress={deleteTask}
          />
        </Card.Actions>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  minutesText: {
    fontSize: FontSize.xx_large,
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "serif",
  },
  title: {
    fontSize: FontSize.large,
    letterSpacing: 1,
  },
});

export default TaskItem;
