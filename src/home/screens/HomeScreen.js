import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Ir a Lista de Gatos"
      onPress={() => navigation.navigate("Cats")}
    />
  );
};

export default HomeScreen;
