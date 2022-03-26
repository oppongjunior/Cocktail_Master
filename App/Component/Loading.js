import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Lotties/Cocktail_2.json")}
        autoPlay
        loop
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 30,
          fontSize: 20,
          fontFamily: "bodyFont",
        }}
      >
        Loading...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Loading;
