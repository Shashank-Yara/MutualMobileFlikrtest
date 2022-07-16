import React from 'react';
import ImageTile from '../../Components/Reusable/ImageTile';
import { Text } from "@rneui/themed";
import { View } from 'react-native';

export default ImageViewer = ({ route }) => {
    const {
        uri,
        title,
        caption
    } = route?.params || {}
  return (
      <View>
          <Text h1>{title}</Text>
          <ImageTile uri={uri}/>
          <Text h2>{caption}</Text>
      </View>
    
  );
};