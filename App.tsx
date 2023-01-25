import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
