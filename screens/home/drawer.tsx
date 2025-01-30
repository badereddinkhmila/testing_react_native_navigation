// import * as React from "react";
// import { Text, View } from "react-native";
// import { Drawer } from "react-native-drawer-layout";
// import { useNavigation } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Button } from "@react-navigation/elements";

// const RightDrawerContext = React.createContext({} as any);

// function HomeScreen() {
//   const navigation = useNavigation();
//   const { openRightDrawer } = React.useContext(RightDrawerContext);

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button onPress={() => navigation?.openDrawer()}>Open left drawer</Button>
//       <Button onPress={() => openRightDrawer()}>Open right drawer</Button>
//     </View>
//   );
// }

// const LeftDrawer = createDrawerNavigator();

// const LeftDrawerScreen = () => {
//   return (
//     <LeftDrawer.Navigator screenOptions={{ drawerPosition: "left" }}>
//       <LeftDrawer.Screen name="Home" component={HomeScreen} />
//     </LeftDrawer.Navigator>
//   );
// };

// export function RightDrawerScreen() {
//   const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

//   const value = React.useMemo(
//     () => ({
//       openRightDrawer: () => setRightDrawerOpen(true),
//       closeRightDrawer: () => setRightDrawerOpen(false),
//     }),
//     []
//   );

//   return (
//     <Drawer
//       open={rightDrawerOpen}
//       onOpen={() => setRightDrawerOpen(true)}
//       onClose={() => setRightDrawerOpen(false)}
//       drawerPosition="right"
//       renderDrawerContent={() => (
//         <View style={{ flex: 1, paddingTop: 50 }}>
//           <Text style={{}}>TADA</Text>
//         </View>
//       )}
//     >
//       <RightDrawerContext.Provider value={value}>
//         <LeftDrawerScreen />
//       </RightDrawerContext.Provider>
//     </Drawer>
//   );
// }

import * as React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.getParent("LeftDrawer").openDrawer()}>
        Open left drawer
      </Button>
      <Button onPress={() => navigation.getParent("RightDrawer").openDrawer()}>
        Open right drawer
      </Button>
    </View>
  );
}

function RightDrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the right drawer</Text>
    </View>
  );
}

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: "left" }}
    >
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
}

const RightDrawer = createDrawerNavigator();

export function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      id={"RightDrawer"}
      drawerContent={(props) => <RightDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
}
