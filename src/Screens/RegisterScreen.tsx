import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }: any) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!userName || !email || !password) {
      Alert.alert('Error', 'Por favor, ingrese los datos correctamente');
      return;
    }

    try {
      const users = (await AsyncStorage.getItem('users')) ?? '[]';
      const usersData = JSON.parse(users);

      const emailExists = usersData.some((user: any) => user.email === email);
      if (emailExists) {
        Alert.alert('Error', 'El correo ya está registrado');
        return;
      }

      usersData.push({ userName, email, password });
      await AsyncStorage.setItem('users', JSON.stringify(usersData));

      Alert.alert('Registro exitoso', '¡Ya puedes iniciar sesión!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Hubo un error al registrar el usuario');
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' }}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Crear Cuenta</Text>

            <TextInput
              placeholder="Nombre de usuario"
              placeholderTextColor="#999"
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
            />

            <TextInput
              placeholder="Correo electrónico"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={handleRegister} style={styles.button}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(30, 58, 138, 0.85)',
    margin: 20,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 26,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#1E3A8A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});
