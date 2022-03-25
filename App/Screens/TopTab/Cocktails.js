import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Loading from "../../Component/Loading";
import { loadHomeCocktailFunc } from "../../Redux/CockTailReducer/CockTailAction";
import { useSelector } from "react-redux";
import CocktailList from "../../Component/CockTails/CockTailList";
import Error from "../../Component/Error";

const Cocktails = ({navigation}) => {
  const cockTailState = useSelector((state) => state.cockTailState);
  const dispatch = useDispatch();

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  useEffect(() => {
    dispatch(loadHomeCocktailFunc(url));
  }, []);

  if (cockTailState.loading.homeLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
  if (cockTailState.errors.homeError) {
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  }

  return (
    <View style={styles.container}>
     <CocktailList data={cockTailState.HomeCocktails} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cocktails;
