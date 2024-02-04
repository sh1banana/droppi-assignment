/** LIBRARY */
import { Dimensions, PixelRatio, Platform } from "react-native";

/* PARSE WIDTH WITH SCREEN SIZE */
const sW = (widthPercent: string) => {
  let screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  let elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/* PARSE HEIGHT WITH SCREEN SIZE */
const sH = (heightPercent: string) => {
  let screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  let elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/* PARSE PADDING HORIZONTAL WITH SCREEN SIZE */
const pH = (layoutWidth: number) => {
  let screenWidth = Dimensions.get('window').width;
  let paddingPercent = (100 - layoutWidth) / 2;
  return PixelRatio.roundToNearestPixel((screenWidth * paddingPercent) / 100);
};

/* PARSE FONT SYSTEM WITH SRCEEN SIZE */
const fS = (size: number) => {
  return PixelRatio.roundToNearestPixel(size);
  // return (parseInt(size) * WIDTH_SCREEN) / STANDARD_SIZE.width;
};

/* PARSE PADDING */
const pixelRatio = (value: number) => {
  return PixelRatio.roundToNearestPixel(value);
};

export const Configs = {
  baseUrl: "https://api.themoviedb.org",
  baseUrlImage: "https://image.tmdb.org/t/p/original",
  baseUrlImageThumb: "https://image.tmdb.org/t/p/w92",
  apiKey: "995e4aa86ab2c3dc963b4843279abc51",
  accountId: 20964118,
  accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTVlNGFhODZhYjJjM2RjOTYzYjQ4NDMyNzlhYmM1MSIsInN1YiI6IjY1YmRlZTE2OTMxZWExMDE3YzlhNzNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgmYbUVh9usSzp341O28ZR9CCtKPCm5b3pyrgWL5DMA",
  layoutWidth: 90,
  headerHeight: Platform.OS === 'ios' ? 44 : 56,
  //Date format
  dateStringFormat: 'MMM, YYYY',
  dayStringFormat: 'ddd',
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm'
}

export const Devices = {
  sW,
  sH,
  fS,
  pH,
  pixelRatio
};

export const Fonts = {
  fontSize: {
    fontSizeXS: 10.4,
    fontSizeSM: 12,
    fontSizeRegular: 14,
    fontSizeLG: 16,
    fontSizeXL: 18,
  },
  fontFamily: {
    thin: 'Poppins-Thin',
    light: 'Poppins-Light',
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  }
}

export const Assets = {
  imageFailed: require('../../assets/images/handle/imageFailed.png'),
}