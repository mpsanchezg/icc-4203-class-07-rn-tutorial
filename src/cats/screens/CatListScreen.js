import React from "react";
import { Button, FlatList, Text } from "react-native";
import { catList } from "../data/cats";

const CatListScreen = ({ navigation, route }) => {
  return (
    <>
      <Text>Gatos</Text>
      <FlatList
        data={catList}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => {
              navigation.navigate("CatDetails", item);
            }}
          />
        )}
      />
    </>
  );
};

export default CatListScreen;
