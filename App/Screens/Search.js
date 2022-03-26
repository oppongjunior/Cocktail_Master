import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Loading from "../Component/Loading";
import Error from "../Component/Error";
import CocktailList from "../Component/CockTails/CockTailList";
import axios from "axios";

const Search = ({ navigation }) => {
  const [text, setText] = useState("a");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchSearch = async () => {
    try {
      setLoading(true);
      setError(false);
      let data = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      setData(data.data.drinks);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput
        label="SEARCH COCKTAIL NAME"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="flat"
        style={styles.input}
        activeUnderlineColor="#ff6700"
      />

      <View style={styles.container}>
        {loading ? <Loading /> : error ? <Error /> : <CocktailList data={data} navigation={navigation} />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: 20,
    marginHorizontal:20,
  },
});
export default Search;
