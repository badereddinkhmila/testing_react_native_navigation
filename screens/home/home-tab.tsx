import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./profile";
import Feed from "./feed";
import Home from "../public/home";

const Tab = createBottomTabNavigator();
const HomeTab = () => {
  return (
    <Tab.Navigator initialRouteName="main">
      <Tab.Screen
        component={Home}
        name="main"
        options={{ headerShown: false }}
      />
      <Tab.Screen component={Profile} name="profile" />
      <Tab.Screen component={Feed} name="feed" />
    </Tab.Navigator>
  );
};

export default HomeTab;
