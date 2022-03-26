import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { async_store } from "../../Utils/AsyncStore";
import {
  addFavoriteFunc,
  deleteFavoriteFunc,
} from "../../Redux/CockTailReducer/CockTailAction";

const CocktailItem = ({ data, navigation }) => {
  const cockTailState = useSelector((state) => state.cockTailState);
  const dispatch = useDispatch();
  const { idDrink } = data;
  const All_IDs = cockTailState.Favorites.map((item) => item.idDrink);

  //handle Add favories
  const handleAdd = () => {
    let newFavorites = [...cockTailState.Favorites, data];
    dispatch(addFavoriteFunc(newFavorites));
    async_store("Favorites", newFavorites);
  };
  const handledelete = () => {
    let newFavorites = cockTailState.Favorites.filter(
      (item) => item.idDrink !== idDrink
    );
    dispatch(deleteFavoriteFunc(newFavorites));
    async_store("Favorites", newFavorites);
  };

  return (
    <Card style={styles.card}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("details", { id: data.idDrink })}
      >
        <Card.Cover
          source={{ uri: data.strDrinkThumb }}
          style={styles.cardImage}
        />
      </TouchableWithoutFeedback>
      <Card.Content style={styles.cardContent}>
        <View>
          <Title style={styles.title}>{data.strDrink}</Title>
          <Paragraph style={styles.category}>{data.strCategory}</Paragraph>
        </View>

        <View>
          {All_IDs.includes(idDrink) ? (
            <AntDesign
              name="heart"
              size={24}
              color="#ff6700"
              onPress={handledelete}
            />
          ) : (
            <AntDesign
              name="hearto"
              size={24}
              color="#ff6700"
              onPress={handleAdd}
            />
          )}
        </View>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 30,
  },
  cardImage: {
    height: 150,
    margin: 20,
    borderRadius: 15,
  },
  cardContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontFamily: "bodyFont",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 14,
  },
  category: {
    color: "#ff6700",
    fontFamily: "bodyFont",
    letterSpacing: 1,
    fontWeight: "bold",
  },
});

export default CocktailItem;
