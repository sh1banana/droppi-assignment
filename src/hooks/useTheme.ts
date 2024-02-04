/** LIBRARY */
import { useEffect, useState } from 'react';
import { StatusBarStyle } from 'react-native';
import {useSelector} from 'react-redux';
/** COMMON */
import { ThemeType } from '~/const/enum/theme';
import { ColorsType } from '~/const/types/colors';
import { RootState } from '~/redux/store';
import themeColors from '~/theme/themeColors';

interface ThemeState {
  colors: ColorsType,
  barStyle: StatusBarStyle;
}

const useTheme = () => {
  const { mode } = useSelector((state: RootState) => state.theme);

  const [theme, setTheme] = useState<ThemeState>({
    colors: themeColors[ThemeType.Light],
    barStyle: "dark-content"
  });

  /** FUNCTIONS */
  const getThemeColors = () => {
    const newBarStyle = mode === ThemeType.Dark ? "light-content" : "dark-content";

    setTheme({
      colors: themeColors[<ThemeType>mode],
      barStyle: newBarStyle
    })
  }

  /** LIFE CYCLE */
  useEffect(() => {
    getThemeColors();
  }, [mode]);

  /** RENDER */
  return {
    ...theme,
    mode
  };
};

export default useTheme;
