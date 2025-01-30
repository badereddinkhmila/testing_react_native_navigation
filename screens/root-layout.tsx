import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./root-navigator";

export const RootLayout = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
