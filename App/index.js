/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './Managers/Navigation';

const Container = () => {
  return (
    <SafeAreaProvider>
        <Navigation />
    </SafeAreaProvider>
  );
};

export default Container;
