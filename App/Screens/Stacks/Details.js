import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import CocktailList from "../../Component/CockTails/CockTailList";
import Error from "../../Component/Error";
import Loading from "../../Component/Loading";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Details = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cockTailState = useSelector((state) => state.cockTailState);

  const fetchCategories = async (url) => {
    try {
      let data = await axios.get(url);
      setData(data.data.drinks);
      setLoading(false);
      console.log(data.data.drinks);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params.id}`;
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

  const { idDrink, strDrinkThumb, strDrink, strCategory, strInstructions } =
    data[0];
  //extract ingredients
  let ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (data[0][`strIngredient${i}`] && data[0][`strMeasure${i}`]) {
      ingredients.push({
        id: i,
        ingredient: data[0][`strIngredient${i}`],
        measure: data[0][`strMeasure${i}`],
      });
    }
  }

  console.log(ingredients);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Card>
          <Card.Cover
            source={{ uri: `${strDrinkThumb}` }}
            style={styles.image}
          />
          <Card.Content>
            <Title style={styles.title}>{strDrink}</Title>

            <View style={styles.textContainer}>
              <Title style={styles.subtitle}>Category</Title>
              <Paragraph style={styles.text}>{strCategory}</Paragraph>
            </View>

            <View style={styles.textContainer}>
              <Title style={styles.subtitle}>Ingredients</Title>
              {ingredients.map((item) => (
                <View
                  key={item.id}
                  style={{
                    ...styles.text,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    paddingRight: 20,
                  }}
                >
                  <Text style={styles.text}>{item.ingredient}</Text>
                  <Text style={styles.text}>{item.measure}</Text>
                </View>
              ))}
            </View>
            <View style={styles.textContainer}>
              <Title style={styles.subtitle}>Instructions</Title>
              <Paragraph
                style={styles.text}
                numberOfLines={2}
                lineBreakMode="tail"
                maxFontSizeMultiplier={2}
              >
                {strInstructions}
              </Paragraph>
            </View>
          </Card.Content>

         
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 120,
  },
  title: {
    fontSize: 30,
    marginVertical: 30,
    fontFamily: "subTitleFont",
    textAlign: "center",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "bodyFont",
  },
  text: {
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "bodyFont",
  },
  textContainer: {
    marginVertical: 15,
  },
  image: {
    height: 400,
  },
});

export default Details;
