import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { goDarkFunc, goLightFunc } from "../Redux/ThemeReducer/Actions";
import { colors } from "../Utils/Colors";
import { FontSize } from "../Utils/FontSize";
import { paddings } from "../Utils/spacing";

const DrawerContent = ({ navigation }) => {
  const theme = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  const handleSwitch = () => {
    if (theme.theme.dark_mode) {
      dispatch(goLightFunc());
      return;
    }
    dispatch(goDarkFunc());
  };
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.theme.background }}
    >
      <View style={styles.topBar}></View>
      <TouchableOpacity onPress={() => navigation.navigate("Task")}>
        <View style={styles.linkItem}>
          <Text style={styles.linkText}>Tasks</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text style={{ color: theme.theme.body, fontWeight: "bold" }}>
          Dark Mode
        </Text>
        <Switch value={theme.theme.dark_mode} onChange={handleSwitch} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: colors.shared.s_color,
    height: 80,
  },
  linkItem: {
    paddingVertical: 5,
    paddingLeft: 10,
  },
  linkText: {
    color: colors.shared.s_color,
    letterSpacing: 1,
    fontSize: FontSize.medium,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: paddings.ps_1,
    justifyContent: "space-between",
    fontSize: FontSize.normal,
    letterSpacing: 1,
  },
});

export default DrawerContent;
