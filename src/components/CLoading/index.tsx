/** LIBRARY */
import { View, Text } from 'react-native';
import React from 'react';
/** COMPONENTS */
import { WaveIndicator } from '../CIndicator';
/** COMMON */
import themeColors from '~/theme/themeColors';
import CStyles from '~/theme/styles';

const CLoading = () => {

  /** RENDER */
  return (
    <View style={[CStyles.con, CStyles.center]}>
      <WaveIndicator color={themeColors.light.primary} waveMode={"outline"} />
    </View>
  )
}

export default CLoading;