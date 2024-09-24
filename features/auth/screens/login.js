import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export function LoginScreen({ navigation }) {
  const [identifierFocused, setIdentifierFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [identifierText, setIdentifierText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const handleIdentifierFocus = () => {
    setIdentifierFocused(true);
    setPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setIdentifierFocused(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/logo_uabcs.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            identifierFocused && styles.inputFocused,
          ]}
          placeholder="Nombre de usuario UABCS"
          placeholderTextColor="#fff"
          onFocus={handleIdentifierFocus}
          onChangeText={setIdentifierText}
          value={identifierText}
        />

        <TextInput
          style={[
            styles.input,
            passwordFocused && styles.inputFocused,
          ]}
          secureTextEntry={true}
          placeholder="Contraseña UABCS"
          placeholderTextColor="#fff"
          onFocus={handlePasswordFocus}
          onChangeText={setPasswordText}
          value={passwordText}
        />

        <Text style={styles.forgotPassword} onPress={() => {}}>
          ¿Has olvidado la contraseña o usuario de SIIA UABCS?
        </Text>
      </View>

      <Pressable
        style={styles.sendBtn}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C1A61",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("2%"),
  },
  imageContainer: {
    marginBottom: hp("5%"),
  },
  logo: {
    width: wp("50%"),
    height: wp("50%"),
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: hp("5%"),
  },
  input: {
    height: hp("6%"),
    width: "80%",
    paddingHorizontal: wp("2%"),
    fontSize: wp("4.5%"),
    marginBottom: hp("4%"),
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    color: "#fff",
  },
  inputFocused: {
    borderBottomColor: "#046DC9",
  },
  forgotPassword: {
    fontSize: wp("3.5%"),
    color: "#fff",
    marginBottom: hp("5%"),
    textDecorationLine: "underline",
  },
  sendBtn: {
    width: "90%",
    height: hp("6.5%"),
    backgroundColor: "#CFC01D",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("8%"),
  },
  btnText: {
    color: "#0C1A61",
    fontSize: wp("5%"),
  },
});

export default LoginScreen;
