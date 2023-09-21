import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CatDetailsScreen from "../screens/CatDetailsScreen";
import CatListScreen from "../screens/CatListScreen";

const CatStack = createNativeStackNavigator();

const CatNavigation = () => {
  return (
    <CatStack.Navigator>
      <CatStack.Screen
        name="CatList"
        component={CatListScreen}
        options={{ headerShown: true }}
      />
      <CatStack.Screen
        name="CatDetails"
        component={CatDetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
    </CatStack.Navigator>
  );
};

export default CatNavigation;
