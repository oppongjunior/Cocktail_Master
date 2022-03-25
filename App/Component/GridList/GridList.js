import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import GridListItem from "./GridListItem";

const GridList = ({ data, navigation, dynamicScreen }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.strCategory}
        renderItem={({ item }) => (
          <GridListItem key={item.strCategory} data={item} navigation={navigation} dynamicScreen={dynamicScreen}  />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    marginBottom:100,
    paddingTop:30
  },
});

export default GridList;
