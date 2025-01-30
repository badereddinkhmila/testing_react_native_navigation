import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

type RouteParamsList = {
  productId: string;
};

type Props = RouteProp<RouteParamsList, "prduct-detail">;

const ProductDetail = ({ route }: Readonly<Props>) => {
  const [count, setCount] = useState(0);

  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerRight: () => (
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      ),
    });
  }, [navigator, count]);

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
      <Button title="Go to Signup" onPress={() => navigator.popTo("signup")} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigator.popToTop()}
      />

      <Text>{route.params.productId}</Text>
      <Text>Product details</Text>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default ProductDetail;
