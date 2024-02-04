/** LIBRARY */
import { Appearance } from 'react-native';
import { AnyAction } from "redux-saga";
import { ThemeType } from "~/const/enum/theme";
import { themeUpdateModeAction } from "../types";

const colorScheme = Appearance.getColorScheme();

interface ThemeInterface {
  mode: ThemeType
}

const initState = {
  mode: colorScheme === ThemeType.Dark ? ThemeType.Dark : ThemeType.Light 
}

const themeReducer = (state: ThemeInterface = initState, action: AnyAction) => {
  switch (action.type) {
    case themeUpdateModeAction:
      return {
        mode: action.payload
      }
    default:
      return state;
  }
};

export default themeReducer;
