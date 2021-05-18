import {PixelRatio} from 'react-native';

export default (height, width) => {
  const picDimension = {
    picWidth: PixelRatio.getPixelSizeForLayoutSize(width),
    picHeight: PixelRatio.getPixelSizeForLayoutSize(height),
  };
  return picDimension;
};
