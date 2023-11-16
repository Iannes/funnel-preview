type ImageDimensions = {
  width: number;
  height: number;
};
export const calculateImageSize = (deviceWidth: number): ImageDimensions => {
  const width = deviceWidth;
  const height = Math.round(deviceWidth * 0.65);
  return { width, height };
};
