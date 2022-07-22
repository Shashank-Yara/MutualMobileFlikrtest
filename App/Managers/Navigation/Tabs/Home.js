import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Stacks/Home';
import Settings from '../../../Screens/Settings';

const Tab = createBottomTabNavigator();

export default HomeTab = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={Settings} options={{headerShown: true}}/>
      </Tab.Navigator>
  );
}