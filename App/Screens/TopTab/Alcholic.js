import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../Component/Error";
import GridList from "../../Component/GridList/GridList";
import Loading from "../../Component/Loading";
import { loadAlcoholListFunc } from "../../Redux/CockTailReducer/CockTailAction";

const Alcholic = ({navigation}) => {
  const cockTailState = useSelector((state) => state.cockTailState);
  const dispatch = useDispatch();

  const url = "http://www.thecocktaildb.com/api/json/v1/1/list.php?a=list";
  useEffect(() => {
    dispatch(loadAlcoholListFunc(url));
  }, []);

  if (cockTailState.loading.alcoholicListLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
  if (cockTailState.errors.alcoholicListError) {
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GridList data={cockTailState.Alcoholics} navigation={navigation} dynamicScreen="viewalcoholics" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Alcholic;
