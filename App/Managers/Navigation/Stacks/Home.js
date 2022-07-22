import * as React from 'react';
import Home from '../../../Screens/Home';
import ImageViewer from '../../../Screens/ImageViewer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName='Main'
    >
      <Stack.Screen
        name="Search"
        component={Home}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Image"
        component={ImageViewer}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}


