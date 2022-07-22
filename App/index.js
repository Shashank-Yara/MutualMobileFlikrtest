/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './Context/Theme';
import AppErrorBoundary from './Hoc/ErrorBoundry';
import Navigation from './Managers/Navigation';
import ErrorHandler from './Utils/Helpers/ErrorHandler';

const Container = () => {
  useEffect(() => {
    ErrorHandler.nativeInit();
  }, []);

  return (
    <AppErrorBoundary>
      <ThemeProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </AppErrorBoundary>
  );
};

export default Container;
