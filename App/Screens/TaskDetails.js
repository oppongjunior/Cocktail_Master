import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { useSelector } from "react-redux";
import { colors } from "../Utils/Colors";
import { FontSize } from "../Utils/FontSize";
import { margins, paddings } from "../Utils/spacing";

const TaskDetails = (props) => {
  const { navigation, route } = props;
  const { title, time, timeLeft, status, image } = route.params.item;
  const theme = useSelector((state) => state.themeState);
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.theme.background }}
    >
      <Card style={{ padding: paddings.ps_1 }}>
        <Text
          style={{
            ...styles.title,
            textAlign: "center",
            fontSize: FontSize.large,
          }}
        >
          {title}
        </Text>
        <View style={{ ...styles.spacer }}>
          <Text style={{ ...styles.title }}>Duration:</Text>
          <Text>{time} minutes</Text>
        </View>
        <View style={{ ...styles.spacer }}>
          <Text style={{ ...styles.title }}>Status:</Text>
          <Text>Started: {status.started ? "Yes" : "No"}</Text>
          <Text>Ended: {status.ended ? "Yes" : "No"}</Text>
        </View>
        <View style={{ ...styles.spacer }}>
          <Text style={{ ...styles.title }}>Time Left:</Text>
          <Text>{timeLeft} minutes</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddings.ps_1,
  },
  title: {
    fontSize: FontSize.title,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: colors.shared.s_color,
    letterSpacing: 1,
    fontFamily: "serif",
  },
  spacer: {
    marginBottom: margins.m_1,
  },
});
export default TaskDetails;
