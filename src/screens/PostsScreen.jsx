import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons"; 

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <Pressable style={styles.logOutBtn}>
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 88,
    paddingTop: 55,

    borderBottomWidth: 1,
    borderBottomColor: "#00000050",
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    color: "#212121",
  },
});
