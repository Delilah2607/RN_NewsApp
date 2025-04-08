import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async () => {
    if (!user || !pass) {
      Alert.alert('Error', 'Por favor, ingrese los datos correctamente');
      return;
    }
    try {
      const users = (await AsyncStorage.getItem('users')) ?? "[]";
      const userdata = JSON.parse(users).find(
        (u: any) => u.userName === user && u.password === pass
      );

      if (userdata) {
        await AsyncStorage.setItem("user", JSON.stringify(userdata));
        navigation.navigate('Welcome');
      } else {
        Alert.alert('Error', 'Credenciales incorrectas');
      }
    } catch (error) {
      Alert.alert('Error', 'Algo salió mal');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={pass}
        onChangeText={setPass}
      />
      
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1E3A8A',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});
