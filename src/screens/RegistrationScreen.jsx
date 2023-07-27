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

export const RegistrationScreen = () => {
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
      keyboardVerticalOffset="-70"
    >
      <View style={styles.registrationContainer}>
        <View style={styles.userImgCont}>
          {userImage && <Image style={styles.userImg} source={UserImg} />}
          <Pressable style={styles.addButton} onPress={handleAddBtnPress}>
            <Image
              source={userImage ? DelBtn : AddBtn}
              style={styles.addBtnImg}
            />
          </Pressable>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
          onChangeText={setLogin}
          value={login}
        />
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
        <Pressable style={styles.registerBtn} onPress={handleSubmit}>
          <Text style={styles.registerText}>Зареєстуватися</Text>
        </Pressable>
        <View style={styles.questionCont}>
          <Text style={styles.questionText}>Вже є акаунт? </Text>
          <Pressable>
            <Text style={styles.questionText}>Увійти</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  registrationContainer: {
    position: "relative",
    width: "100%",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  userImgCont: {
    width: 120,
    height: 120,
    position: "absolute",
    top: -60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addButton: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    position: "absolute",
    top: 81,
    left: 107,
  },
  addBtnImg: {
    borderRadius: 12.5,
  },
  userImg: {
    borderRadius: 16,
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
  registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 51,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  registerText: {
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
