import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const LabelInput = props => (
  <View style={{padding: 10}}>
    <TextInput style={{height: 40}}
    placeholder={props.title} />
  </View>
);
