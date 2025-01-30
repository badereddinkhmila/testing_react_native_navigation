import { Button, View } from "react-native";

const TabBar = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#123456" }}>
      <Button title="Profile" onPress={() => navigation.navigate("main")} />
      <Button title="Profile" onPress={() => navigation.navigate("profile")} />
      <Button title="Feed" onPress={() => navigation.navigate("feed")} />
    </View>
  );
};

export default TabBar;
