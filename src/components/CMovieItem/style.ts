/** LIBRARY */
import { StyleSheet } from "react-native";
import { Configs, Devices } from "~/configs";
import { ColorsType } from "~/const/types/colors";
import CStyles from "~/theme/styles";

const styled = (colors: ColorsType) => {
  const styles = StyleSheet.create({
    item: {
      ...CStyles.row,
      backgroundColor: colors.surface,
      paddingVertical: Devices.pixelRatio(12), 
      borderBottomWidth: .3, 
      borderBottomColor: colors.border
    },
    itemImg: { 
      width: Devices.pixelRatio(75), 
      height: Devices.pixelRatio(100), 
      borderRadius: Devices.pixelRatio(8)
    },
    itemContent: { 
      ...CStyles.con,
      ...CStyles.colSpaBet, 
      paddingLeft: Devices.pixelRatio(12)
    },
    itemContentTop: { 
      marginBottom: Devices.pixelRatio(8)
    },
    itemContentBottom: { 
      ...CStyles.rowAliCen
    },
    itemRating: {
      ...CStyles.rowAliCen,
      marginVertical: Devices.pixelRatio(4)
    },
    itemView: {
      ...CStyles.rowAliCen,
      ...CStyles.con
    },
    itemDate: {
      ...CStyles.rowAliCen,
    },

    txtTitleItem: { 
      ...CStyles.txtTitleItem,
      color: colors.onSurface
    },
    txtDescriptionItem: { 
      ...CStyles.txtDescriptionItem,
      color: colors.onPlaceholder,
      marginTop: Devices.pixelRatio(4)
    },
    txtSub: {
      ...CStyles.txtSubDescriptionItem,
      color: colors.onPlaceholder,
      paddingLeft: Devices.pixelRatio(4)
    }
  })

  return styles;
} 

export default styled;