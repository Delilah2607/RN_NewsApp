// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fetchTopHeadlines } from '../api/api';
import NewsCard from '../components/NewsCard';  
import { NewsArticle } from '../types/New';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchTopHeadlines();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener las noticias principales');
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return <Text style={styles.loadingText}>Cargando noticias...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <NewsCard
            article={item}
            onPress={() => navigation.navigate('News Details', { article: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
});

export default HomeScreen;
