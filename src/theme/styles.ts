/* LIBRARY */
import themeColors from "./themeColors";
/** COMMON */

const baseProperties = {
  fontWeightThin: 'Poppins-Thin',
  fontWeightLight: 'Poppins-Light',
  fontWeightRegular: 'Poppins-Regular',
  fontWeightMedium: 'Poppins-Medium',
  fontWeightSemiBold: 'Poppins-SemiBold',
  fontWeightBold: 'Poppins-Bold',

  fontSizeXS: 10.4,
  fontSizeSM: 12,
  fontSizeRegular: 14,
  fontSizeLG: 16,
  fontSizeXL: 18,
};

const CStyles = {
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
  
  fBold: baseProperties.fontWeightBold,
  fSemiBold: baseProperties.fontWeightSemiBold,
  fMedium: baseProperties.fontWeightMedium,
  fRegular: baseProperties.fontSizeRegular,

  txtHeader: { fontSize: 18, fontFamily: baseProperties.fontWeightSemiBold, color: themeColors.light.onSurface, textAlign: 'center' },
  txtTitleBlock: { fontSize: 18, fontFamily: baseProperties.fontWeightBold, color: themeColors.light.onSurface },
  txtTitleItem: { fontSize: 16, fontFamily: baseProperties.fontWeightMedium, color: themeColors.light.onSurface },
  txtContentItem: { fontSize: 14, fontFamily: baseProperties.fontWeightRegular, color: themeColors.light.onSurface },
  txtDescriptionItem: { fontSize: 12, fontFamily: baseProperties.fontWeightRegular, color: themeColors.light.onPlaceholder },
  txtSubDescriptionItem: { fontSize: 10, fontFamily: baseProperties.fontWeightRegular, color: themeColors.light.onPlaceholder },
  txtButton: { fontSize: 16, fontFamily: baseProperties.fontWeightBold, color: themeColors.light.onPrimary, textAlign: 'center' }
};

export default CStyles;
