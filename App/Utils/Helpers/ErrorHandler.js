import {Alert, BackAndroid, Platform} from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const errorHandler = (error, isFatal, errorInfo) => {
  if (isFatal) {
    let alertObj = Platform?.OS === 'android' ? {
      text: 'Close',
      onPress: () => {
        BackAndroid.exitApp();
      },
    } : {
      text: 'Close'
    }
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}
        We have reported this to our team ! Please close the app and start again!
        `,
      [
        alertObj
      ],
    );
  } else {
    console.log(error);
  }
};

export default {
  nativeInit() {
    setNativeExceptionHandler(exceptionString => {}, true);
    setJSExceptionHandler(errorHandler, true);
  }
};
