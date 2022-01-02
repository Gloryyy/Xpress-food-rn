import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';

const ClientSearch = createNativeStackNavigator();

export function ClientStack({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'RestaurantHomeScreen' || 'MenuProductScreen') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

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

      <ClientSearch.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
      />
    </ClientSearch.Navigator>
  );
}

const styles = StyleSheet.create({});
