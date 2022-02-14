import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, ProgressBar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../Component/RoundedButton";
import { colors } from "../Utils/Colors";
import { FontSize } from "../Utils/FontSize";
import { margins, paddings } from "../Utils/spacing";
import { Task_status } from "../Utils/TaskStatus";
import { updateTaskFunc } from "../Redux/Tasks/TasksActions";

const minutesToMillis = (minutes) => {
  return Math.floor(minutes * 60 * 1000);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const Focus = (props) => {
  const { navigation, route } = props;
  const { title, time, timeLeft, status, image, key } = route.params.item;
  const theme = useSelector((state) => state.themeState);
  const [millis, setMillis] = useState(minutesToMillis(timeLeft));
  const [ongoing, setOngoing] = useState(false);
  const [progressBar, setProgressBar] = useState(1);

  const dispatch = useDispatch();

  const minutesLeft = Math.floor(millis / 1000 / 60) % 60;
  const secondsLeft = Math.floor(millis / 1000) % 60;

  //function to handle start and resume countdown
  const handleStart = () => {
    if (!status.started) {
      const updatedTaskItem = {
        ...route.params.item,
        status: {
          started: true,
          ended: false,
        },
      };
      dispatch(updateTaskFunc(key, updatedTaskItem));
    }
    setOngoing(true);
  };

  // function to handle pause
  const handlePause = () => {
    setOngoing(false);
  };

  //count down function
  const countDown = () => {
    setMillis((time) => {
      if (time > 0) {
        return time - 1000;
      }
      return time;
    });
  };

  //start or pause countdown using UseEffect generating a render based on the ongoing state
  const interval = useRef(null);
  useEffect(() => {
    if (!ongoing) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [ongoing]);

  useEffect(() => {
    setProgressBar(millis / minutesToMillis(timeLeft));
  }, [millis]);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.theme.background }}
    >
      <Text
        style={{
          ...styles.title,
          textAlign: "center",
          fontSize: FontSize.large,
        }}
      >
        {title}
      </Text>

      {/* duration card */}
      <Card style={{ ...styles.countDown, }}>
        <Text style={{ ...styles.countDownText }}>
          {formatTime(minutesLeft)}:{formatTime(secondsLeft)}
        </Text>
      </Card>
      
      {/* progress bar */}

      <View>
        <ProgressBar progress={progressBar} style={{ ...styles.progressBar }} color={colors.shared.s_color} />
      </View>
      {/* button box */}
      <View style={{ ...styles.btnContainer }}>
        {ongoing ? (
          <RoundedButton
            title="Pause"
            textStyle={{ color: "#fff", fontSize: 30 }}
            style={{ ...styles.RoundedButton }}
            onPress={handlePause}
          />
        ) : !status.started && !status.ended ? (
          <RoundedButton
            title="Start"
            textStyle={{ color: "#fff", fontSize: 30 }}
            style={{ ...styles.RoundedButton }}
            onPress={handleStart}
          />
        ) : status.started && status.ended === false ? (
          <RoundedButton
            title="Resume"
            textStyle={{ color: "#fff", fontSize: 30 }}
            style={{ ...styles.RoundedButton }}
            onPress={handleStart}
          />
        ) : (
          <Text>This task has ended</Text>
        )}
      </View>
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
  countDown: {
    padding: paddings.p_3,
    marginTop: margins.m_2,
    marginHorizontal:margins.m_3
  },
  countDownText: {
    fontSize: FontSize.xx_large + 10,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.shared.s_color,
  },
  progressBar:{
    marginTop:margins.m_4,
    height:20,
    marginHorizontal:margins.m_3,
    borderRadius:20,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: paddings.p_2,
  },
  RoundedButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 120,
    borderRadius: 60,
    marginLeft: 20,
    backgroundColor: colors.shared.s_color,
  },
});

export default Focus;
