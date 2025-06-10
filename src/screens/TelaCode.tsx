// src/screens/TelaCode.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { VerificationScreenNavigationProp } from "../types/navigation";
type Props = {
  navigation: VerificationScreenNavigationProp;
};

const TelaCode = ({ navigation }: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Informe o código recebido</Text>

          <Text style={styles.emailText}>Um email foi enviado para:</Text>
          <Text style={styles.email}>usuario@email.com</Text>

          <Text style={styles.instruction}>Verifique sua caixa de email</Text>

          <Text style={styles.codeLabel}>Insira o código de 6 dígitos</Text>

          <View style={styles.codeContainer}>
            <TextInput
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={6}
              placeholder="______"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.separator} />

          <TouchableOpacity
            onPress={() => navigation.replace("ColetaInfo")}
            style={styles.button}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.wrongEmailButton}>
            <Text style={styles.wrongEmailText}>
              Envio feito para o Email Errado?
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DFF525",
    textAlign: "center",
    marginBottom: 30,
  },
  emailText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#CD63F1",
    textAlign: "center",
    marginBottom: 30,
  },
  instruction: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  codeLabel: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
  },
  codeContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  codeInput: {
    backgroundColor: "#fff",
    color: "#232323",
    borderRadius: 10,
    padding: 15,
    fontSize: 20,
    width: 200,
    textAlign: "center",
    letterSpacing: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#444",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#363636",
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  wrongEmailButton: {
    alignItems: "center",
  },
  wrongEmailText: {
    color: "#DFF525",
    fontSize: 14,
  },
});

export default TelaCode;
