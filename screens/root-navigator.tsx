import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./public/forgot-password";
import SignUp from "./public/signup";
import SignIn from "./public/signin";
import ProductDetail from "./public/product-detail";
import { Button, Image, Text, View } from "react-native";
import HomeTab from "./home/home-tab";
import { ModalScreen } from "./home/modal";
import { RightDrawerScreen } from "./home/drawer";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        options={{
          header: () => null,
        }}
        component={HomeTab}
      />
      <Stack.Screen
        name="signin"
        component={SignIn}
        options={{ headerTitle: "SignIn" }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerTitle: "SignUp" }}
      />
      <Stack.Screen
        name="forgot-passord"
        component={ForgotPassword}
        options={{ headerTitle: "Forgot Passord" }}
      />
      <Stack.Screen
        name="product-detail"
        component={ProductDetail}
        options={({ route }) => ({
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("@assets/favicon.png")}
              />
              <Text>{`Product detail ${route.params?.productId ?? ""}`}</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackColor: "#fff",
          headerBackTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => <Button title="Info" />,
        })}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="myModal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen
        name="drawer"
        component={RightDrawerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
