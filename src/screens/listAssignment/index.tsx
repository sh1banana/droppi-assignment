/** LIBRARY */
import { View, Text, FlatList, TouchableOpacity, ListRenderItemInfo } from 'react-native';
import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
/** COMPONENTS */
import CHeader from '~/components/CHeader';
/** COMMON */
import useTheme from '~/hooks/useTheme';
import { Devices } from '~/configs';
import { RoutesName } from '~/const/enum/routesName';
/** STYLES */
import styled from './style';

interface Assignment {
  id: RoutesName,
  title: string
}

const dummyData = [
  // { id: RoutesName.ListAssignment, title: "File management"},
  { id: RoutesName.Movies, title: "The movie"}
]
const ListAssignmentScreen = (props: any) => {
  const theme = useTheme();

  const styles = useMemo(() => {
    return styled(theme.colors);
  }, [theme.mode]);

  /** FUNCTIONS */
  const onPressItem = (route: RoutesName) => {
    props?.navigation?.navigate?.(route)
  }
  
  /** RENDER */
  return (
    <View style={styles.container}>
      <CHeader
        title={"Droppii Assignment"}
      />
      <View style={styles.content}>
        <FlatList contentContainerStyle={styles.scrollContent}
          data={dummyData}
          renderItem={({ item, index }: ListRenderItemInfo<Assignment>) => {
            const isLast = index === dummyData.length - 1;
            return (
              <TouchableOpacity
                activeOpacity={.5}
                style={[styles.assignment, isLast && styles.assignmentLast]}
                onPress={() => onPressItem(item.id)}
              >
                <Text style={styles.txtTitleItem}>{item?.title || ""}</Text>
                <FontAwesomeIcon icon={faChevronRight} size={Devices.pixelRatio(16)} color={theme.colors.onSurface} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item: Assignment) => item.id?.toString?.()}
        />
      </View>
    </View>
  )
}

export default ListAssignmentScreen;