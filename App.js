import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import PhotoFull from './components/fullPhotoPage/photoFull';
import HomePage from './components/gridPhotoPage/HomePage';
import { store } from './components/redux/store';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomePage}></Stack.Screen>
          <Stack.Screen name='Full' options={{ title: 'Photo' }} component={PhotoFull}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
