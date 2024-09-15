import React, { useState } from "react";
import { signIn } from "../../../api";
import * as SecureStorage from 'expo-secure-store'

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export function LoginScreen({ navigation }) {
  const [identifierFocused, setIdentifierFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [identifierText, setIdentifierText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  
  const handleIdentifierFocus = () => {
    
    setIdentifierFocused(true);
    setPasswordFocused(false);
  };
  
  const saveToken = (token)=>{
    SecureStorage.setItemAsync(token.acces_token)
  }

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

        <Text style={styles.forgotPassword} onPress={() => { }}>
          ¿Has olvidado la contraseña o usuario de SIIA UABCS?
        </Text>
      </View>

      <Pressable
        style={styles.sendBtn}
        onPress={() => {
          const tokenObj = signIn(identifierText,passwordText)
          saveToken(tokenObj)
          console.log(passwordText,identifierText)
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
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.01,
  },
  imageContainer: {
    marginBottom: height * 0.05,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: height * 0.05,
  },
  input: {
    height: height * 0.06,
    width: "80%",
    paddingHorizontal: width * 0.01,
    fontSize: width * 0.045,
    marginBottom: height * 0.04,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    color: "#fff",
  },
  inputFocused: {
    borderBottomColor: "#046DC9",
  },
  forgotPassword: {
    fontSize: width * 0.035,
    color: "#fff",
    marginBottom: height * 0.05,
    textDecorationLine: "underline",
  },
  sendBtn: {
    width: "90%",
    height: height * 0.065,
    backgroundColor: "#CFC01D",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.08,
  },
  btnText: {
    color: "#0C1A61",
    fontSize: width * 0.05,
  },
});

export default LoginScreen;
