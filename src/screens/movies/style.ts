/** LIBRARY */
import { StyleSheet } from "react-native";
import { Configs, Devices, Fonts } from "~/configs";
import { ColorsType } from "~/const/types/colors";
import CStyles from "~/theme/styles";

const styled = (colors: ColorsType) => {
  const styles = StyleSheet.create({
    container: {
      ...CStyles.container,
      backgroundColor: colors.background
    },
    content: {
      ...CStyles.container,
      backgroundColor: colors.background
    },
    scrollContent: {
      ...CStyles.grow
    },
    listMovies: {
      backgroundColor: colors.surface,
      paddingHorizontal: Devices.pH(Configs.layoutWidth),
    },
    searchContainer: {
      ...CStyles.rowAliCenJusBet,
      backgroundColor: colors.surface,
      borderRadius: Devices.pixelRatio(8),
      borderWidth: .5,
      borderColor: colors.border,
      height: Devices.pixelRatio(40),
      marginHorizontal: Devices.pH(Configs.layoutWidth),
      marginVertical: Devices.pixelRatio(12)
    },
    searchInput: {
      ...CStyles.con,
      color: colors.onSurface,
      fontSize: Fonts.fontSize.fontSizeRegular,
      height: Devices.pixelRatio(40),
      paddingHorizontal: Devices.pixelRatio(12)
    },
    buttonClearSearch: {
      ...CStyles.center,
      height: Devices.pixelRatio(40),
      width: Devices.pixelRatio(40),
    }
  })

  return styles;
} 

export default styled;