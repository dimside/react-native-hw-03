import { StyleSheet, ImageBackground, View } from "react-native";
import BcgImage from "./assets/images/bcgi.jpg";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { PostsScreen } from "./src/screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BcgImage}
        resizeMode="cover"
        style={styles.image}
      />

      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <PostsScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
