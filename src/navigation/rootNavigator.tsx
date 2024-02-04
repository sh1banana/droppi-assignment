/** LIBRARY */
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/** COMPONENTS */
import {  RootMain } from './appNavigator';
/** COMMON */
import { RoutesName } from '~/const/enum/routesName';

const RootNavigator = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [initialRoute, setInitialRoute] = useState<RoutesName>(RoutesName.ListAssignment);

  /** FUNCTIONS */

  /** LIFE CYCLE */

  /** RENDER */

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <RootAuth /> */}
        <RootMain initialRoute={initialRoute} />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default RootNavigator;