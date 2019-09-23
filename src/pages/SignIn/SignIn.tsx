import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { toaster } from "../../lib/toaster";
import SafeAreaView from "react-native-safe-area-view";
import { Input } from "../../components/Input";
import { useMyStore } from "../../modules/me";

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: "#68E8B7"
  },
  card: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 150,
    backgroundColor: "white",
    opacity: 0.9,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 10
  },
  titleContainer: {
    marginTop: 30,
    marginHorizontal: 30
  },
  titleText: {
    color: "#000",
    fontSize: 30
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#80FFAA",
    borderRadius: 5
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  textStyle: {
    fontSize: 15
  },
  buttonContainer2: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#68E86F",
    borderRadius: 5
  }
});

export const SignIn = props => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useMyStore();

  const tryLogin = async () => {
    try {
      await login(name, password);
      props.navigation.navigate("account");
    } catch (error) {
      toaster("Le login a échoué");
    }
  };

  const signUp = () => {
    props.navigation.navigate("signUp");
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Hello!</Text>
          <View>
            <Input
              onChangeText={setName}
              value={name}
              label="Nom d'utilisateur"
            />
          </View>
          <View>
            <Input
              onChangeText={setPassword}
              value={password}
              label="Mot de passe"
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={tryLogin} disabled={isLoading}>
              {!isLoading ? (
                <Text style={styles.buttonText}>Se connecter</Text>
              ) : (
                <ActivityIndicator />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>OU</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer2} onPress={signUp}>
            <Text style={styles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
