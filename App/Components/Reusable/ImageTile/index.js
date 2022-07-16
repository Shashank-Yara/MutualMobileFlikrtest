import React from 'react';
import {Tile} from '@rneui/themed';
import { View } from 'react-native';

export default ImageTile = (props) => {
  return props?.uri ? (
    <View style={{ paddingTop: 10, paddingBottom: 10 }}>
    <Tile
      imageSrc={{
        uri: props.uri || ''
      }}
      featured
      activeOpacity={1}
      {...props}
    />
    </View>
  ) : null
};
