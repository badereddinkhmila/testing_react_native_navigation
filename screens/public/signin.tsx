import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const SignIn = () => {
  const navigator = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title="Go to signin... again"
        onPress={() => navigator.push("signin")}
      />
      <Button title="Go back" onPress={() => navigator.goBack()} />
      <Button
        title="Go to Products"
        onPress={() =>
          navigator.navigate("product-detail", {
            productId: 55,
          })
        }
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigator.popToTop()}
      />

      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
