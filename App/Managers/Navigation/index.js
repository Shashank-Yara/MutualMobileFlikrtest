import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './Tabs/Home'

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}