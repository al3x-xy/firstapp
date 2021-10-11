import * as React from 'react';
import { ImageBackground, Button, View } from 'react-native';

function WelcomeScreen ({navigation}) {
return (
  <View style = {{flex: 1}}>
  <ImageBackground source={require("../assets/61iIrSIOkbL._AC_SY550_.jpg")} resizeMode = "cover" style={{flex: 1, justifyContent:"center"}}>
  <View style={{ marginBottom: 10}}>
  <Button
  title="Go to Characters Screen"
  color="red"
  onPress={() => navigation.navigate('Characters')}>
   </Button>
   </View>
<View>
  <Button style={{marginTop: 50}}
  title="Go to Favorites"
  color="blue">
  </Button>
  </View>
  </ImageBackground>
  </View>
)
}

export default WelcomeScreen;
