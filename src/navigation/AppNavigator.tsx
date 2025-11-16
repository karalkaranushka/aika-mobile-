import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../features/splash/SplashScreen';
import BottomTabNavigatorUI from '../app/navigation/bottomtabnavigator/BottomTabNavigatorUI';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigatorUI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;