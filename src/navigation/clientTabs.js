import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../global/styles';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import {ClientStack} from './clientStack';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons,
        headerShown: false,
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({size}) => (
            <Icon
              name="home"
              type="material"
              color={colors.buttons}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({size}) => (
            <Icon
              name="search"
              type="material"
              color={colors.buttons}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({size}) => (
            <Icon
              name="view-list"
              type="material"
              color={colors.buttons}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({size}) => (
            <Icon
              name="person"
              type="material"
              color={colors.buttons}
              size={size}
            />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
