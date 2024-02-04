/** LIBRARY */
import { StyleSheet } from "react-native";
import { Configs, Devices } from "~/configs";
import { ColorsType } from "~/const/types/colors";
import CStyles from "~/theme/styles";

const styled = (colors: ColorsType) => {
  const styles = StyleSheet.create({
    conHeader: { 
      ...CStyles.rowAliCen,
      paddingHorizontal: Devices.pH(Configs.layoutWidth),
      height: Configs.headerHeight, 
      backgroundColor: colors.surface,
      borderBottomWidth: .3,
      borderBottomColor: colors.border
    },
    conLeft: { 
      ...CStyles.rowAliCen,
      flex: .15, 
      height: Configs.headerHeight
    },
    conBody: {
      ...CStyles.rowAliCen,
      ...CStyles.center,
      flex: 1,
      height: Configs.headerHeight 
    },
    conRight: {
      ...CStyles.rowAliCen,
      ...CStyles.rowJusEnd, 
      flex: .15,
      height: Configs.headerHeight,
    },
    conButtonLeft: {
      ...CStyles.center,
      position: 'relative',
      backgroundColor: 'transparent',
      marginRight: Devices.pixelRatio(8),
      width: Devices.pixelRatio(28),
      height: Devices.pixelRatio(28),
      borderRadius: Devices.pixelRatio(28)
    },
    conButtonRight: {
      ...CStyles.center,
      position: 'relative',
      backgroundColor: 'transparent',
      marginLeft: Devices.pixelRatio(8),
      width: Devices.pixelRatio(28),
      height: Devices.pixelRatio(28),
      borderRadius: Devices.pixelRatio(28)
    },

    txtHeader: {
      ...CStyles.txtHeader,
      color: colors.onSurface
    }
  })

  return styles;
} 

export default styled;