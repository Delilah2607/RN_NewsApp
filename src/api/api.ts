import axios from 'axios';
import { NewsArticle } from '../types/New';


const api = axios.create({
  baseURL:"https://newsapi.org/v2", 
});


export const fetchTopHeadlines = async (): Promise<NewsArticle[]> => {
  try {
    const response = await api.get('/top-headlines', {
      params: {
        country: 'us', 
        "language": "en", 
        apiKey: 'cf8b24157a954c95a167be1753aedff8',  
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw new Error('Error al obtener las noticias principales');
  }
};

// Función para realizar una búsqueda de noticias por palabra clave
export const searchNews = async (query: string): Promise<NewsArticle[]> => {
  try {
    const response = await api.get('/everything', {
      params: {
        q: query,  
        apiKey: 'cf8b24157a954c95a167be1753aedff8', 
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error searching for news:', error);
    throw new Error('Error al realizar la búsqueda de noticias');
  }
};
