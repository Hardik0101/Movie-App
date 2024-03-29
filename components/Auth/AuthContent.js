import { Alert, Image, StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import AuthForm from "./AuthForm";
import { Colors } from "../../constant/style";
import FlatButton from "../UI/FlatButton";
import { useNavigation } from "@react-navigation/native";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid =
      /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(
        password
      );

    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid || (!isLogin && !emailsAreEqual)) {
      Alert.alert("Invalid input", "Please check your entered Email.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
      });
      return;
    } else if (!passwordIsValid || (!isLogin && !passwordsAreEqual)) {
      Alert.alert(
        "Invalid input",
        "Please enter Strong Password like aBc@#123"
      );
      setCredentialsInvalid({
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={require("../../assets/image/image.png")}
        />
        <View style={styles.authContent}>
          <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
          <View style={styles.buttons}>
            <FlatButton onPress={switchAuthModeHandler}>
              {isLogin ? "Create a new user" : "Log in instead"}
            </FlatButton>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
  image: {
    width: 300,
    height: 200,
    marginLeft: 18,
    resizeMode: "contain",
    marginBottom: -56,
  },
});
