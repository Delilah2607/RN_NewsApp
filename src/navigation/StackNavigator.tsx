import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../Screens/LoginScreen';

import WelcomeScreen from '../Screens/welcomeScreen';
import DrawerNavigation from './DrawerNavigation';
// El Drawer se usará después de que el usuario se loguee

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Main" component={DrawerNavigation} />  
    </Stack.Navigator>
  );
};

export default StackNavigator;
