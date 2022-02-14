import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import Navigation from "./App/Navigation/Navigation";
import store from "./App/Redux/store";
import { loadThemeFunc } from "./App/Redux/ThemeReducer/Actions";
import Welcome from "./App/Screens/Welcome";

export default function AppWrapper() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const showDisplay = () => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  };

  useEffect(() => {
    dispatch(loadThemeFunc());
    showDisplay();
  }, []);

  return <>{!display ? <Welcome /> : <Navigation />}</>;
}
