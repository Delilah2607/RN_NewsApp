import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NewsArticle } from '../types/New';

type Props = {
  article: NewsArticle;
  onPress: () => void;
};

const NewsCard: React.FC<Props> = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.tarjeta} onPress={onPress}>
      {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.imagen} />}
      <Text style={styles.titulo}>{article.title}</Text>
      <Text style={styles.descripcion}>{article.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 3, // Bordes gruesos de colores
    borderColor: '#1E90FF', // Azul vibrante
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imagen: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#1E3A8A', // Azul oscuro
  },
  descripcion: {
    fontSize: 14,
    color: '#555',
  },
});

export default NewsCard;
