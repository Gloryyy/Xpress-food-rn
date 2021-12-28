import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';

const ClientSearch = createNativeStackNavigator();

export function ClientStack() {
  return (
    <ClientSearch.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ClientSearch.Screen name="SearchScreen" component={SearchScreen} />

      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
      />

      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
      />
    </ClientSearch.Navigator>
  );
}

const styles = StyleSheet.create({});
