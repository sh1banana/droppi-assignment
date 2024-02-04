/** LIBRARY */
import React, { useMemo } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
/** COMPONENTS */
/** COMMON */
import { Devices } from '~/configs';
import useTheme from '~/hooks/useTheme';
import { Colors } from '~/const/enum/colors';
/** STYLES */
import styled from './style';

interface CHeaderPropsType {
  hasBack?: boolean,
  hasRight?: boolean,
  hasLeft?: boolean,
  title?: string,
  iconRight?: IconProp,
  iconRightColor?: string,
  iconLeft?: IconProp,
  iconLeftColor?: string,
  hasTransparent?: boolean,
  hasBorder?: boolean,
  onPressLeft?: () => void,
  onPressRight?: () => void
}

const CHeader = ({
  hasBack = false,
  hasRight = false,
  hasLeft = false,
  title = '',
  iconRight,
  iconRightColor,
  iconLeft,
  iconLeftColor,
  hasTransparent = false,
  hasBorder = true,
  onPressLeft = () => { },
  onPressRight = () => { },
}: CHeaderPropsType) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const theme = useTheme();

  const styles = useMemo(() => {
    return styled(theme.colors)
  }, [theme.mode]);

  /** FUNCTIONS */
  const renderStatusBar = () => {
    return (
      <View style={{ height: insets.top, backgroundColor: hasTransparent ? 'transparent' : theme.colors.surface}}>
        <StatusBar translucent backgroundColor={theme.colors.surface} barStyle={theme.barStyle} />
      </View>
    )
  }

  const onPressBack = () => {
    navigation.goBack()
  }

  /** LIFE CYCLE */

  /** RENDER */
  return (
    <>
    {renderStatusBar()}
    <View style={[styles.conHeader, { backgroundColor: hasTransparent ? 'transparent' : theme.colors.surface, borderBottomWidth: (!hasBorder || hasTransparent) ? 0 : .3 }]}>
      <View style={styles.conLeft}>
        {hasBack &&
          <TouchableOpacity activeOpacity={.5}
            style={[styles.conButtonLeft, hasTransparent && { backgroundColor: 'rgba(0,0,0,.3)' }]}
            onPress={onPressBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} size={Devices.fS(16)} color={hasTransparent ? Colors.white : theme.colors.onSurface} />
          </TouchableOpacity>
        }
        {hasLeft && iconLeft &&
          <TouchableOpacity activeOpacity={.5}
            onPress={onPressLeft}
            style={[styles.conButtonLeft, hasTransparent && { backgroundColor: 'rgba(0,0,0,.3)' }]}
          >
            <FontAwesomeIcon icon={iconLeft} size={Devices.fS(18)} color={iconLeftColor || (hasTransparent ? Colors.white : theme.colors.onSurface)} />
          </TouchableOpacity>
        }
      </View>

      <View style={styles.conBody}>
        <Text style={styles.txtHeader} numberOfLines={1}>{title}</Text>
      </View>

      <View style={styles.conRight}>
        {hasRight && iconRight &&
          <TouchableOpacity activeOpacity={.5}
            onPress={onPressRight}
            style={[styles.conButtonRight, hasTransparent && { backgroundColor: 'rgba(0,0,0,.3)' }]}
          >
            <FontAwesomeIcon icon={iconRight} size={Devices.fS(18)} color={iconRightColor || (hasTransparent ? Colors.white : theme.colors.onSurface)} />
          </TouchableOpacity>
        }
      </View>
    </View>
    </>
  )
}

export default CHeader;
