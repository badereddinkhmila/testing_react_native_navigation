import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const SignUp = () => {
  const navigator = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#123FA2",
      }}
    >
      <Button
        title="Go to profile..."
        onPress={() =>
          navigator.navigate("home", {
            screen: "profile",
          })
        }
      />
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;
