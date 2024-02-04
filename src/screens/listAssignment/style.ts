/** LIBRARY */
import { StyleSheet } from "react-native";
import { Configs, Devices } from "~/configs";
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
    assignment: {
      ...CStyles.rowAliCenJusBet,
      backgroundColor: colors.surface,
      paddingHorizontal: Devices.pH(Configs.layoutWidth),
      paddingVertical: Devices.pixelRatio(16),
      borderBottomWidth: .5,
      borderBottomColor: colors.border
    },
    assignmentLast: {
      borderBottomWidth: 0
    },
    
    txtTitleItem: {
      ...CStyles.txtContentItem,
      color: colors.onSurface
    }
  })

  return styles;
} 

export default styled;