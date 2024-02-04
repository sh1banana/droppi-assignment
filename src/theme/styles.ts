/* LIBRARY */
import { Fonts } from "~/configs";
import themeColors from "./themeColors";
import { TextStyle, ViewStyle } from "react-native";
/** COMMON */

type CStylesType = {
  container: ViewStyle
  grow: ViewStyle,
  row: ViewStyle,
  con: ViewStyle,
  center: ViewStyle,

  col: ViewStyle,
  colAliCen: ViewStyle,
  colAliSta: ViewStyle,
  colAliEnd: ViewStyle,
  colJusCen: ViewStyle,
  colJusEnd: ViewStyle,
  colJusSta: ViewStyle,
  colSpaAro: ViewStyle,
  colSpaBet: ViewStyle,
  colAliCenJusAro: ViewStyle,
  colAliCenJusSpa: ViewStyle,

  rowAliCen: ViewStyle,
  rowAliStart: ViewStyle,
  rowAliEnd: ViewStyle,
  rowJusCen: ViewStyle,
  rowJusSta: ViewStyle,
  rowJusEnd: ViewStyle,
  rowSpaBet: ViewStyle,
  rowSpaAro: ViewStyle,
  rowSpaEv: ViewStyle,
  rowAliCenJusBet: ViewStyle,
  rowAliCenJusAro: ViewStyle,

  shadow: ViewStyle,

  shadowItem: ViewStyle,
  
  txtHeader: TextStyle,
  txtTitleBlock: TextStyle,
  txtTitleItem: TextStyle,
  txtContentItem: TextStyle,
  txtDescriptionItem: TextStyle,
  txtSubDescriptionItem: TextStyle,
  txtButton: TextStyle
}

const CStyles: CStylesType = {
  container: { flex: 1, backgroundColor: themeColors.light.background },
  grow: { flexGrow: 1 },
  row: { flexDirection: 'row' },
  con: { flex: 1 },
  center: { alignItems: 'center', justifyContent: 'center', },

  col: { flexDirection: 'column'},
  colAliCen: { flexDirection: 'column', alignItems: 'center'},
  colAliSta: { flexDirection: 'column', alignItems: 'flex-start'},
  colAliEnd: { flexDirection: 'column', alignItems: 'flex-end'},
  colJusCen: { flexDirection: 'column', justifyContent: 'center'},
  colJusEnd: { flexDirection: 'column', justifyContent: 'flex-end'},
  colJusSta: { flexDirection: 'column', justifyContent: 'flex-start'},
  colSpaAro: { flexDirection: 'column', justifyContent: 'space-around'},
  colSpaBet: { flexDirection: 'column', justifyContent: 'space-between'},
  colAliCenJusAro: { flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'},
  colAliCenJusSpa: { flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'},

  rowAliCen: { flexDirection: 'row', alignItems: 'center'},
  rowAliStart: { flexDirection: 'row', alignItems: 'flex-start'},
  rowAliEnd: { flexDirection: 'row', alignItems: 'flex-end'},
  rowJusCen: { flexDirection: 'row', justifyContent: 'center'},
  rowJusSta: { flexDirection: 'row', justifyContent: 'flex-start'},
  rowJusEnd: { flexDirection: 'row', justifyContent: 'flex-end'},
  rowSpaBet: { flexDirection: 'row', justifyContent: 'space-between'},
  rowSpaAro: { flexDirection: 'row', justifyContent: 'space-around'},
  rowSpaEv: { flexDirection: 'row', justifyContent: 'space-evenly'},
  rowAliCenJusBet: { flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between'},
  rowAliCenJusAro: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'},

  shadow: {
    shadowColor: themeColors.light.onSurface,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  shadowItem: {
    shadowColor: themeColors.light.onPlaceholder,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 10,
  },
  
  txtHeader: { fontSize: Fonts.fontSize.fontSizeXL, fontFamily: Fonts.fontFamily.semiBold, color: themeColors.light.onSurface, textAlign: 'center' },
  txtTitleBlock: { fontSize: Fonts.fontSize.fontSizeXL, fontFamily: Fonts.fontFamily.bold, color: themeColors.light.onSurface },
  txtTitleItem: { fontSize: Fonts.fontSize.fontSizeRegular, fontFamily: Fonts.fontFamily.semiBold, color: themeColors.light.onSurface },
  txtContentItem: { fontSize: Fonts.fontSize.fontSizeRegular, fontFamily: Fonts.fontFamily.regular, color: themeColors.light.onSurface },
  txtDescriptionItem: { fontSize: Fonts.fontSize.fontSizeSM, fontFamily: Fonts.fontFamily.regular, color: themeColors.light.onPlaceholder },
  txtSubDescriptionItem: { fontSize: Fonts.fontSize.fontSizeXS, fontFamily: Fonts.fontFamily.regular, color: themeColors.light.onPlaceholder },
  txtButton: { fontSize: Fonts.fontSize.fontSizeLG, fontFamily: Fonts.fontFamily.bold, color: themeColors.light.onPrimary, textAlign: 'center' }
};

export default CStyles;
