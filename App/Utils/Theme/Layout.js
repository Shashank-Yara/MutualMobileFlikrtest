import {Dimensions, PixelRatio} from 'react-native';

const {getFontScale, getPixelSizeForLayoutSize, get} = PixelRatio;
const LAYOUT = {
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  SCREEN_SCALE: Dimensions.get('screen').scale,
  WINDOW_WIDTH: Dimensions.get('window').width,
  WINDOW_HEIGHT: Dimensions.get('window').height,
  WINDOW_SCALE: Dimensions.get('window').scale,
  SCREEN_FONTSCALE: getFontScale() || Dimensions.get('screen').fontScale,
  WINDOW_FONTSCALE: getFontScale() || Dimensions.get('window').fontScale,
  PIXEL_SIZE_LAYOUT: getPixelSizeForLayoutSize(),
  PIXEL_SIZE: get(),
  GET: param => Dimensions.get(param),
  SET: param => Dimensions.set(param),
};

export default LAYOUT;
