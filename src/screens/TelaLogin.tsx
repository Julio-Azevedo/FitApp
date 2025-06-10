// src/screens/LoginScreen.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { VerificationScreenNavigationProp } from "../types/navigation";
type Props = {
  navigation: VerificationScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Login</Text>

          <Text style={styles.welcome}>
            Bem-Vindo Ao <Text style={styles.welcome_span}>FitApp</Text>
          </Text>
          <Text style={styles.subtitle}>
            Utilize nossa ferramentas e mantenha seus treinos sempre
            atualizados.
          </Text>

          <View style={styles.square}>
            <Text style={styles.label}>Informe seu email</Text>
            <TextInput
              style={styles.input}
              placeholder="usuario@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoFocus={false}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Code")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>ou faça login com</Text>
          <TouchableOpacity style={{ alignSelf: "center", marginTop: 10 }}>
            <Image
              source={require("../../assets/logo-google.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#232323",
  },
  scrollContainer: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
    color: "#DFF525",
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  welcome_span: {
    color: "#CD63F1",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 50,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  square: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 235,
    backgroundColor: "#896CFE",
    marginVertical: 15,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    color: "#232323",
    borderRadius: 50,
    padding: 10,
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    width: 175,
    height: 45,
    backgroundColor: "#363636",
    opacity: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default LoginScreen;
