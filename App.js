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

// import Login from "./screens/Login"
// import Dashboard from "./screens/Dashboard"
// import Master from "./screens/Master"
import Profile from "./screens/Profile"
import EditProfile from "./screens/EditProfile"
import ProfileProvider from "./screens/ProfileCtx"

const Stack = createStackNavigator()

const App = () => {
  return (
    // 4: wrap your component with the provider
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
};

export default App;
