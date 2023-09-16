import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

const CatItem = ({ name, breed, age, image }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Detalles</Text>
      <Text>Nombre: {name}</Text>
      <Text>Raza: {breed}</Text>
      <Text>Edad: {age}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
    </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default CatItem;
