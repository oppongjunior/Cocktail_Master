import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";


const AppIntro = ({ item }) => {
  return (
    <View
      style={{ ...styles.container, backgroundColor: item.backgroundColor }}
    >
      <View>
        <View style={styles.textContainer}>
          <Text style={{ ...styles.title, fontFamily:"titleFont" }}>{item.title}</Text>
        </View>
        <View>
          <LottieView style={styles.lottie} source={item.image} autoPlay loop />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.text, fontFamily:"subTitleFont"}}>{item.text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 35,
    paddingHorizontal:20,
    fontWeight: "900",
    letterSpacing: 1,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
    textShadowColor: "black",
  },
  lottie: {
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1,
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
  },
});

export default AppIntro;
