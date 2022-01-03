import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const App = createNativeStackNavigator();

export function AppStack() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="App" component={DrawerNavigator} />

      <App.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
      />
    </App.Navigator>
  );
}
