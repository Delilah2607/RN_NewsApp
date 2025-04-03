import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/DrawerNavigation';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList, 'Bienvenida'>>();

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>🌍 Welcome to news with Aida in the US</Text>
      <Text style={styles.subtitulo}>The betters News of US</Text>
      
      <TouchableOpacity 
        style={styles.boton} 
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.textoBoton}>Ver Noticias</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3A8A', 
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700', 
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  boton: {
    backgroundColor: '#FFD700', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  textoBoton: {
    fontSize: 18,
    color: '#1E3A8A', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
