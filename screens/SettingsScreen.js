import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

const Realm = require('realm');

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'exp.json',
    },
  };

   render() {
   let realm = new Realm({
     schema: [{name: 'Dog', properties: {name: 'string'}}]
   });

   realm.write(() => {
     realm.create('Dog', {name: 'Rex'});
   });

   return (
     <View>
       <Text>
         Count of Dogs in Realm: {realm.objects('Dog').length}
       </Text>
     </View>
   );
 }
}

