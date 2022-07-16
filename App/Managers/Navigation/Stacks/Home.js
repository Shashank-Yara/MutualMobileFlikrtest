import * as React from 'react';
import Home from '../Tabs/Home';
import ImageViewer from '../../../Screens/ImageViewer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ImageViewer"
        component={ImageViewer}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
