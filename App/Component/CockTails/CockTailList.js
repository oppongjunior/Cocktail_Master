import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CocktailItem from "./CockTailItem";

const CocktailList = ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => (
          <CocktailItem key={item.idDrink} data={item} navigation={navigation} />
        )}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginBottom: 80,
  },
});
export default CocktailList;
