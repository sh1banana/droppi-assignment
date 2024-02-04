/** LIBRARY */
import React from 'react';
import {} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import RootNavigator from '~/navigation/rootNavigator';
/** COMMON */
import store from '~/redux/store';

const App = () => {

  /** RENDER */
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
}


export default App;
