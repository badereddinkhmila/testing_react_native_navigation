import { useEffect, useState } from "react";
import { RootLayout } from "@screens/root-layout";
import SplashScreen from "@components/features/splash-screen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <RootLayout />;
}
