import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from './features/auth/screens/login';
import { HomeScreen } from './navigation/navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false
          }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}





