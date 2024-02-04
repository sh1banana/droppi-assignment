/** LIBRARY */
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
/** COMMON */
import Routes from './routes';
import { RoutesName } from '~/const/enum/routesName';
import { Entries } from '~/const/types/arrayHelpers';
import { favoriteMovieGetListAction } from '~/redux/types';

interface NavigatorProps {
  initialRoute: RoutesName
}

const Stack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator();

export const RootMain = (props: NavigatorProps) => {
  const dispatch = useDispatch();

  /** FUNCTIONS */
  const getFavoriteMovies = () => {
    dispatch({
      type: favoriteMovieGetListAction,
      payload: {
        params: {},
        callback: () => {}
      }
    })
  }

  /** LIFE CYCLE */
  useEffect(() => {
    getFavoriteMovies();
  }, [])
  /** RENDER */
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
