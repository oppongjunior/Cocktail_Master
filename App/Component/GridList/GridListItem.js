import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const GridListItem = ({ data, navigation, dynamicScreen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(dynamicScreen, {
            categoryName: data.strCategory,
          })
        }
      >
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.avaterBox}>
              <Title style={styles.title}>
                {data.strCategory.substring(0, 1)}
              </Title>
            </View>
            <Paragraph style={styles.category}>{data.strCategory}</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  avaterBox: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
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
  title: {
    fontFamily: "titleFont",
  },
  category: {
    letterSpacing: 1,
    fontFamily: "bodyFont",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GridListItem;
