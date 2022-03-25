import React from "react";
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import AppWrapper from "./AppWrapper";
import { useFonts } from "expo-font";

export default function App() {
  const [loadedFonts] = useFonts({
    titleFont: require("./App/assets/Fonts/Monoton/Monoton-Regular.ttf"),
  });
  const [subTitleFont] = useFonts({
    subTitleFont: require("./App/assets/Fonts/Creepster/Creepster-Regular.ttf"),
  });
  const [bodyFont] = useFonts({
    bodyFont: require("./App/assets/Fonts/Handlee/Handlee-Regular.ttf"),
  });

  if (!loadedFonts) {
    return null;
  }
  if (!subTitleFont) {
    return null;
  }
  if (!bodyFont) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
