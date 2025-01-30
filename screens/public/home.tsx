import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

const Home = () => {
  const navigator = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFD2",
      }}
    >
      <Button
        onPress={() => {
          navigator.navigate("signin");
        }}
      >
        Go to signin
      </Button>
      <Button
        onPress={() => {
          navigator.navigate("myModal");
        }}
      >
        open modal
      </Button>
      <Button
        onPress={() => {
          navigator.navigate("drawer");
        }}
      >
        open drawer
      </Button>

      <Text>Home</Text>
    </View>
  );
};

export default Home;
