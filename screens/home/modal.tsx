import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function ModalScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
}
