import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../Screens/Home';
import ImageViewer from '../../../Screens/ImageViewer';

const Tab = createBottomTabNavigator();

export default HomeTab = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ImageViewer" component={ImageViewer} />
      </Tab.Navigator>
  );
}