import { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import AddBtn from "../../assets/images/addBtn.png";
import DelBtn from "../../assets/images/delBtn.png";
import UserImg from "../../assets/images/user.jpg";

export const LoginScreen = () => {
  const [userImage, setUserImage] = useState(false);
  const [login, setLogin] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isShowPass, setIsShowPass] = useState(true);
  const [registrData, setRegistrData] = useState(null);

  const handleAddBtnPress = () => {
    setUserImage((current) => !current);
  };
  const handleShowPass = () => {
    setIsShowPass((current) => !current);
  };
  const handleSubmit = () => {
    setRegistrData({ login, email, password });
    setLogin(null);
    setEmail(null);
    setPassword(null);
    console.log(registrData);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset="-10"
    >
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Увійти</Text>

        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          inputMode="email"
          placeholderTextColor="#BDBDBD"
          onChangeText={setEmail}
          value={email}
        />
        <View style={styles.passwordInput}>
          <TextInput
            style={[styles.input, { marginBottom: 43 }]}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={isShowPass}
          />
          <Pressable style={styles.showPassBtn} onPress={handleShowPass}>
            <Text style={styles.showPassText}>
              {isShowPass ? "Показати" : "Сховати"}
            </Text>
          </Pressable>
        </View>
        <Pressable style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>Увійти</Text>
        </Pressable>
        <View style={styles.questionCont}>
          <Text style={styles.questionText}>Немає акаунту? </Text>
          <Pressable>
            <Text style={styles.questionText}>Зареєструватися</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    position: "relative",
    width: "100%",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginBottom: 32,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  passwordInput: {
    position: "relative",
  },
  showPassBtn: {
    position: "absolute",
    top: 16,
    left: 255,
  },
  showPassText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
  loginBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 51,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  loginText: {
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },
  questionCont: {
    flexDirection: "row",
  },
  questionText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
});
