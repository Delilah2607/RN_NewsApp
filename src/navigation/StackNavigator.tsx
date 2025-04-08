import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../Screens/LoginScreen';

import WelcomeScreen from '../Screens/welcomeScreen';
import DrawerNavigation from './DrawerNavigation';
import RegisterScreen from '../Screens/RegisterScreen';
import SplashScreen from '../Screens/SplashScreen';
// El Drawer se usará después de que el usuario se loguee

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Main" component={DrawerNavigation} />  
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
