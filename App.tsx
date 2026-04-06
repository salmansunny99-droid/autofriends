/**
 * AutoFriends App
 * Premium Car Rental Social Network
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './src/navigation';
import { AppProvider } from './src/context/AppContext';
import { COLORS } from './src/theme';

// Enable React Native Screens for better navigation performance
enableScreens();

function App() {
  return (
    <SafeAreaProvider>
      {/* Force light theme status bar across entire app */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
        translucent={false}
      />
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}

export default App;
