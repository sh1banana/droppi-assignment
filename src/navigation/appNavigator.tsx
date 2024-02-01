/** LIBRARY */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/** COMMON */
import Routes from './routes';
import { RoutesName } from '~/const/enum/RoutesName';
import { Entries } from '~/const/types/arrayHelpers';

interface NavigatorProps {
  initialRoute: RoutesName
}

const Stack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator();

export const RootMain = (props: NavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={props.initialRoute}
      screenOptions={{
        headerShown: false
      }}
    >
      {(Object.entries(Routes.main) as Entries<typeof Routes.main>).map(([key, value]) => 
        <Stack.Screen key={key}
          name={value.name}
          component={value.path}
        />
      )}

    </Stack.Navigator>
  )
}

export const RootAuth = () => {
  return (
    <AuthStack.Navigator initialRouteName={RoutesName.SignIn}
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen
        name={RoutesName.SignIn}
        component={Routes.main.listAssignment.path}
      />
    </AuthStack.Navigator>
  )
}
