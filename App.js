import * as React from 'react';
import { Button, View, Text, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./Screens/Welcome"
import CharacterList from "./Screens/Characterlist"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Characters" component={CharacterList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
