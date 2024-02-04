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
      position: 'absolute',
      top: 0,
      height: Devices.sH('100%')
    },
    headerFixedContainer: { 
      position: 'absolute', 
      backgroundColor: colors.surface, 
      zIndex: 1, 
      width: Devices.sW('100%'),
      borderBottomColor: colors.border
    },
    animatedImg: { 
      width: Devices.sW('100%'), 
      height: Devices.sH('35%')
    },
    imgBanner: { 
      width: '100%',
      height: '100%'
    },
    block: {
      backgroundColor: colors.surface,
      marginBottom: Devices.pixelRatio(10),
      paddingHorizontal: Devices.pixelRatio(16),
      paddingVertical: Devices.pixelRatio(12)
    },
    blockHeader: {
      marginBottom: Devices.pixelRatio(8)
    },
    mainInfo: {
      ...CStyles.row,
      marginTop: -Devices.pixelRatio(20)
    },
    imgPoster: {
      width: Devices.pixelRatio(90),
      height: Devices.pixelRatio(120),
      borderRadius: 8
    },
    mainInfoContent: {
      ...CStyles.con,
      paddingTop: Devices.pixelRatio(12),
      paddingLeft: Devices.pixelRatio(12)
    },
    genres: {
      marginTop: Devices.pixelRatio(6)
    },
    homepage: {
      ...CStyles.con,
      ...CStyles.row,
      marginTop: Devices.pixelRatio(6)
    },
    rating: {
      ...CStyles.rowAliCen,
    },
    view: {
      ...CStyles.rowAliCen,
      ...CStyles.con
    },
    mainInfoContentBottom: {
      ...CStyles.rowSpaBet,
    },
    subInfo: {
      ...CStyles.rowAliCenJusBet,
      paddingBottom: Devices.pixelRatio(8),
      paddingTop: Devices.pixelRatio(4),
      marginTop: Devices.pixelRatio(12),
      marginBottom: -Devices.pixelRatio(8)
    },
    subInfoItem: {
      ...CStyles.colJusCen,
      ...CStyles.con,
      borderRightColor: colors.border
    },

    txtTitle: {
      ...CStyles.txtTitleItem,
      color: colors.onSurface
    },
    txtSub: {
      ...CStyles.txtSubDescriptionItem,
      color: colors.onPlaceholder
    },
    txtSubInfo: {
      ...CStyles.txtDescriptionItem,
      color: colors.onSurface,
      textAlign: "center",
      fontFamily: Fonts.fontFamily.medium
    },
    txtContent: {
      ...CStyles.txtContentItem,
      color: colors.onSurface
    }
  })

  return styles;
} 

export default styled;