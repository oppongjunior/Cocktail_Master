import React from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";
import { colors } from "../Utils/Colors";
import { FontSize } from "../Utils/FontSize";
import { margins } from "../Utils/spacing";

const Welcome = ({ visible }) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <View>
            <Image style={styles.image} source={require("../../assets/welcome_logo.gif")} />
          <Text style={styles.title}>Focus Time</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.shared.s_color,
  },
  image:{
      width:150,
      height:150
  },
  title: {
    color: "#fff",
    fontSize: FontSize.large,
    letterSpacing: 1,
    fontWeight:"bold",
    fontFamily: 'Roboto',
    marginTop:margins.m_1
  },
});
export default Welcome;
