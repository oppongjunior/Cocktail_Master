import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../Component/Error";
import GridList from "../../Component/GridList/GridList";
import Loading from "../../Component/Loading";
import { loadcategoryListFunc } from "../../Redux/CockTailReducer/CockTailAction";

const Category = ({ navigation }) => {
  const cockTailState = useSelector((state) => state.cockTailState);
  const dispatch = useDispatch();

  const url = "http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  useEffect(() => {
    dispatch(loadcategoryListFunc(url));
  }, []);

  if (cockTailState.loading.categoryListLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
  if (cockTailState.errors.categoryListError) {
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GridList
        data={cockTailState.Categories}
        navigation={navigation}
        dynamicScreen={"viewcategories"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Category;
