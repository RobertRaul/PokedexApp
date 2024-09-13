import React from "react";

import { MyStackNavigator } from "./presentation/navigator/MyStackNavigator";
import { ThemeContextProvider } from "./presentation/context/ThemeContext";

export const PokedexApp = () => {
  return (
    <ThemeContextProvider>
      <MyStackNavigator />
    </ThemeContextProvider>
  );
};
