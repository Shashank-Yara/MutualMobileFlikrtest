import React from 'react';
import {Button, Text, View} from 'react-native';
import RNRestart from 'react-native-restart';
import styles from './styles';

const Fallback = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.icon}>🐛</Text>
        <Text style={styles.title}>
          Unable to load component
        </Text>
        <Text style={styles.text}>
          Please Restart the app again
        </Text>
        <Button title='Restart' onPress={() => RNRestart.Restart()} />
      </View>
  );
};

export default Fallback
