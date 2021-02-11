/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/Login"
import Dashboard from "./screens/Dashboard"
import Master from "./screens/Master"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"master"} component={Master} />
        <Stack.Screen name={"login"} component={Login} />
        <Stack.Screen name={"dashboard"} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
