import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/context/AppContext';
import { StackNavigator } from './src/navigation/StackNavigator';
import { CustomAlert } from './src/components/CustomAlert';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <StackNavigator />
          <CustomAlert />
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}
