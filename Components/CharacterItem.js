import * as React from 'react';
import { View, Text } from 'react-native';


function CharacterItem (props){
return (
  <View>
  <Text>{props.characterName}
  </Text>
  </View>
)
}
export default CharacterItem;
