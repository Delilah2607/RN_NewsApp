import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NewsArticle } from "../types/New";
import HomeScreen from "../Screens/HomeScreen";
import DetailsNewsScreen from "../Screens/DetailsNewsScreen";
import WelcomeScreen from '../Screens/welcomeScreen';




// Define los tipos para las rutas
export type RootDrawerParamList = {
  Home: undefined; 
  'Inicio':undefined
  'Bienvenida':undefined
  'News Details': { article: NewsArticle }; 
};


const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigation = () => {
  return (
   
        <Drawer.Navigator initialRouteName="Bienvenida">
      <Drawer.Screen name="Bienvenida" component={WelcomeScreen} />
      <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="News Details" component={DetailsNewsScreen} />
      </Drawer.Navigator>
    
  );
};

export default DrawerNavigation;
