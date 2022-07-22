import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const EmptyList = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.icon}>🐛</Text>
        <Text style={styles.title}>
          No data to display
        </Text>
        <Text style={styles.text}>
          Please type in search bar to see images
        </Text>
      </View>
  );
};

export default EmptyList
