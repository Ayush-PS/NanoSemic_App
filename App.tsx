import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/pages/Welcome';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';


type RootStackParamList = {
  Welcome: undefined;
  Login: undefined; // Add other screens here as needed
};


const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        {/* Add other screens here */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
});
