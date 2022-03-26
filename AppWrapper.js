import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import AppIntro from "./App/Component/AppIntro";
import Home from "./App/Screens/Home";
import { async_store } from "./App/Utils/AsyncStore";
import AppIntroSlider from "react-native-app-intro-slider";
import Navigation from "./App/Navigation/Navigation";
import { loadFavoritesFunc } from "./App/Redux/CockTailReducer/CockTailAction";

const slides = [
  {
    key: 1,
    title: "Cocktail Master",
    text: "The master of all cocktail apps",
    image: require("./App/assets/Lotties/Cocktail_1.json"),
    backgroundColor: "#f46036",
  },
  {
    key: 2,
    title: "For Bartenders",
    text: "The app the every bartender must have",
    image: require("./App/assets/Lotties/Cocktail_3.json"),
    backgroundColor: "#8f2d56",
  },
  {
    key: 3,
    title: "Not only for bartenders!",
    text: "For your own use",
    image: require("./App/assets/Lotties/Cocktail_2.json"),
    backgroundColor: "#ff686b",
  },
];

export default function AppWrapper() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadFavoritesFunc());
  });
  const [showRealApp, SetShowRealApp] = useState(false);

  const onDone = () => {
    SetShowRealApp(true);
  };

  if (showRealApp) {
    return <Navigation />;
  }
  return <AppIntroSlider renderItem={AppIntro} data={slides} onDone={onDone} />;
}
