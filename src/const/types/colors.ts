import { ThemeType } from "../enum/theme"

export type ColorsType = {
  background: string,
  surface: string,
  primary: string,
  secondary: string,
  onBackground: string,
  onSurface: string,
  placeholder: string,
  onPlaceholder: string,
  onPlaceholderInput: string,
  onPrimary: string,
  onSecondary: string,
  error: string,
  onError: string,
  success: string,
  onSuccess: string,
  warning: string,
  onWarning: string,
  border: string,
  underline: string
}

export type ThemeColorsType =  {
  [ThemeType.Light]: ColorsType,
  [ThemeType.Dark]: ColorsType
}