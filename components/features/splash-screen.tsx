import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import * as AnimationData from "../../assets/lotties/splash.json";

const SplashScreen = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current && animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        source={AnimationData}
        autoPlay={true}
        loop={true}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E3E62",
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
