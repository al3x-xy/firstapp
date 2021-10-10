import * as React from 'react';
import { Button, View, Text, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WelcomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
      <Text>Welcome</Text>
      <Button
        title="Go to Characters List Screen"
        onPress={() => navigation.navigate('Characters')}
      />
      <Button
        title="Go to Favorites List Screen"
        onPress={() => navigation.navigate('Favorites')}
      />

    </View>

  );
}

function CharacterListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Characters List Screen</Text>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Google
</Text>
    </View>
  );
}

function CharacterDetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Characters Details Screen</Text>
    </View>
  );
}

function FavoriteCharacterListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favorites Characters Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Characters" component={CharacterListScreen} />
        <Stack.Screen name="Details" component={CharacterDetailsScreen} />
        <Stack.Screen name="Favorites" component={FavoriteCharacterListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
