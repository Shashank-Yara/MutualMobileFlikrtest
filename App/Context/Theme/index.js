import React, {useContext} from 'react';
import {Dimensions, useWindowDimensions} from 'react-native';
import { COLORS, COMMONSTYLES, METRICS } from '../../Utils/Theme';

const ThemeContext = React.createContext();

function ThemeProvider({children}) {
  const {width, height, scale, fontScale} = useWindowDimensions();

  const LAYOUT = {
    WIDTH: width,
    HEIGHT: height,
    SCALE: scale,
    FONTSCALE: fontScale,
    GET: param => Dimensions.get(param),
    SET: param => Dimensions.set(param),
  };

  const value = {
    LAYOUT,
    COLORS,
    COMMONSTYLES,
    METRICS
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export {ThemeProvider};

export function useTheme() {
  return useContext(ThemeContext);
}
