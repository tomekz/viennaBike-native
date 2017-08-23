import { Font } from 'expo';

const cachedFonts = fonts => fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
  {
    'montserrat': require('../assets/fonts/Montserrat-Regular.ttf')
  },
  {
    'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf')
  },
  {
    'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf')
  },
  {
    'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf')
  }
]);
