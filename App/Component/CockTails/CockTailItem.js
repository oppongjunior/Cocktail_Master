import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";


const CocktailItem = ({ data, navigation }) => {
  return (
    <Card style={styles.card}>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate("details",{id:data.idDrink})}>
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

        <TouchableWithoutFeedback>
          <AntDesign name="hearto" size={24} color="#ff6700" />
        </TouchableWithoutFeedback>
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
    borderRadius:30
  },
  cardImage: {
    height: 150,
    margin: 20,
    borderRadius:15,
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
    fontSize:14,
  },
  category: {
    color: "#ff6700",
    fontFamily: "bodyFont",
    letterSpacing: 1,
    fontWeight: "bold",
  },
});

export default CocktailItem;
