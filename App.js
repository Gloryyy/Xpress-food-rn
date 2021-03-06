import React from 'react';
import {LogBox} from 'react-native';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SignInContextProvider} from './src/contexts/authContext';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
