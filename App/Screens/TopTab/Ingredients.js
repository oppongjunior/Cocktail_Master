import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../Component/Error";
import GridList from "../../Component/GridList/GridList";
import Loading from "../../Component/Loading";
import { loadIngredientListFunc } from "../../Redux/CockTailReducer/CockTailAction";

const Ingredients = ({ navigation }) => {
  const cockTailState = useSelector((state) => state.cockTailState);
  const dispatch = useDispatch();

  const url = "http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
  useEffect(() => {
    dispatch(loadIngredientListFunc(url));
  }, []);

  if (cockTailState.loading.ingredientListLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
  if (cockTailState.errors.ingredientListError) {
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <GridList
        data={cockTailState.Ingredients}
        navigation={navigation}
        dynamicScreen={"viewingredients"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Ingredients;
