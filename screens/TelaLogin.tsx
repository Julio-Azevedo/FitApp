import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types"; // ajuste o caminho

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const TelaLogin = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  const redirecionarParaHome = () => {
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao FitApp</Text>
      <Text style={styles.text}>Mantenha seus treinos sempre atualizados</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.googleBtn}
          onPress={redirecionarParaHome}
        >
          <Image
            source={require("../assets/logo-google.png")}
            style={styles.icon}
          />
          <Text style={styles.btnText}>Continuar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.emailBtn}
          onPress={redirecionarParaHome}
        >
          <Text style={styles.btnText}>Continuar com E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start", // Alinha à esquerda
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  googleBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
  },
  emailBtn: {
    backgroundColor: "#2979FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  btnText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight : 5,
  },
  spantitle: {
    color: "#FFD700", // Example color for emphasis
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
