import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

const CoreStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <CoreStack.Navigator>
      <CoreStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      {/*<CoreStack.Screen name="Cats" component={CatListScreen} />
        <CoreStack.Screen name="CatDetails" component={CatDetailsScreen} /> */}
    </CoreStack.Navigator>
  );
};

export default HomeNavigation;
