import axios from "axios";
import React, { useState, useEffect } from "react";
import { View,StyleSheet } from "react-native";
import CocktailList from "../../Component/CockTails/CockTailList";
import Error from "../../Component/Error";
import Loading from "../../Component/Loading";


const AlcholicStack = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const fetchCategories = async (url) => {
    try {
      let data = await axios.get(url);
      setData(data.data.drinks);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${route.params.categoryName}`;
  useEffect(() => {
    fetchCategories(url);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  }



  return (
    <View style={styles.container}>
      <CocktailList data={data} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlcholicStack;
