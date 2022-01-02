import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import SignUpScreen from '../screens/authScreens/SignUpScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen} />

      <Auth.Screen name="SignInScreen" component={SignInScreen} />
      <Auth.Screen name="SignUpScreen" component={SignUpScreen} />

      <Auth.Screen name="DrawerNavigator" component={DrawerNavigator} />

      <Auth.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
      />
    </Auth.Navigator>
  );
}
