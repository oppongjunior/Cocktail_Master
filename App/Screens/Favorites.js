import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CocktailList from "../Component/CockTails/CockTailList";
import Error from "../Component/Error";
import Loading from "../Component/Loading";

const Favorites = ({ navigation }) => {
  const cockTailState = useSelector((state) => state.cockTailState);
  return (
    <View style={styles.container}>
      <CocktailList data={cockTailState.Favorites} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
