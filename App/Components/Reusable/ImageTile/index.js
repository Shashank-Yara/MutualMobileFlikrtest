import React from 'react';
import {Tile} from '@rneui/themed';
import { View } from 'react-native';
import styles from './styles';

export default ImageTile = (props) => {
  return props?.uri ? (
    <View style={styles.tileContainer}>
    <Tile
      imageSrc={{
        uri: props.uri || ''
      }}
      featured={false}
      activeOpacity={1}
      {...props}
    />
    </View>
  ) : null
};
