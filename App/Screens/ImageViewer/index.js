import React from 'react';
import ImageTile from '../../Components/Reusable/ImageTile';
import {View, Text} from 'react-native';
import AppErrorBoundary from '../../Hoc/ErrorBoundry';
import styles from './styles';
import { COMMONSTYLES } from '../../Utils/Theme';

export default ImageViewer = ({route}) => {
  const {uri, title, caption} = route?.params || {};

  return (
    <AppErrorBoundary>
      <View>
        <Text style={[styles.title, COMMONSTYLES.fontSize24]}>{title}</Text>
        <ImageTile uri={uri} />
        <Text style={[styles.caption, COMMONSTYLES.fontSize16]}>{caption}</Text>
      </View>
    </AppErrorBoundary>
  );
};
