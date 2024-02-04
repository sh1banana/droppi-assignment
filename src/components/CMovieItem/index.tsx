/** LIBRARY */
import { View, Text, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faEye, faStar, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
/** COMPONENTS */
import CImage from '../CImage';
/** COMMON */
import useTheme from '~/hooks/useTheme';
import { MovieItemType } from '~/const/types/movieItem';
import { Configs, Devices } from '~/configs';
import { Colors } from '~/const/enum/colors';
/** STYLES */
import styled from './style';

interface CMovieItemProps {
  item: MovieItemType,
  isFavorite: boolean,
  onPress: (id: number) => void,
  onPressFavorite: () => void
}

const CMovieItem = ({
  item,
  isFavorite,
  onPress = () => { },
  onPressFavorite = () => { }
}: CMovieItemProps) => {
  const theme = useTheme();

  const styles = useMemo(() => {
    return styled(theme.colors);
  }, [theme.mode])

  return (
    <TouchableOpacity activeOpacity={.5}
      style={styles.item}
      onPress={() => onPress(item.id)}
    >
      <CImage style={styles.itemImg}
        source={{ uri: `${Configs.baseUrlImageThumb}${item?.poster_path}` }}
      />
      <View style={styles.itemContent}>
        <View style={styles.itemContentTop}>
          <View style={styles.itemRating}>
            <FontAwesomeIcon icon={faStar} size={Devices.pixelRatio(12)} color={Colors.cadmiumOrange} />
            <Text style={[styles.txtSub, { flex: 1 }]}>{`${item?.vote_average?.toFixed(0)}/10  (${item?.vote_count} reviews)`}</Text>
            <TouchableOpacity activeOpacity={.5}
              onPress={onPressFavorite}
            >
              <FontAwesomeIcon 
                icon={isFavorite ? faHeartSolid : faHeart}
                size={Devices.pixelRatio(16)}
                color={isFavorite ? Colors.coralRed : theme.colors.onPlaceholder}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.txtTitleItem} numberOfLines={2}>{item?.title || "--"}</Text>
          <Text style={styles.txtDescriptionItem} numberOfLines={1}>{item?.overview}</Text>
        </View>
        <View style={styles.itemContentBottom}>
          <View style={styles.itemView}>
            <FontAwesomeIcon icon={faEye} size={Devices.pixelRatio(12)} color={theme.colors.onPlaceholder} />
            <Text style={styles.txtSub}>{item?.popularity}</Text>
          </View>
          <View style={styles.itemDate}>
            <FontAwesomeIcon icon={faClock} size={Devices.pixelRatio(12)} color={theme.colors.onPlaceholder} />
            <Text style={styles.txtSub}>{item?.release_date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CMovieItem;