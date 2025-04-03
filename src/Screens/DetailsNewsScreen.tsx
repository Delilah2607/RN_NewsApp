import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootDrawerParamList } from '../navigation/DrawerNavigation';



type Props = {
  route: RouteProp<RootDrawerParamList, 'News Details'>;
};

const DetailsNewsScreen = ({ route }: Props) => {
  const { article } = route.params;  // Aquí ya está correctamente tipado

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.publishedAt}>{article.publishedAt}</Text>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  publishedAt: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#444',
  },
});

export default DetailsNewsScreen;
