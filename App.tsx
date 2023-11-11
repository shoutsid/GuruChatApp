// App.tsx
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store, persistor} from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
// import TestScreen from './src/screens/TestScreen';

export type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenListeners={{
                state: e => {
                  // Do something with the state
                  console.log('state changed', e.data);
                },
              }}
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#17202A', // Replace #desiredColor with your color code
                },
                headerTintColor: '#fff', // This is for the header's text and icons
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
              {/* <Stack.Screen name="Test" component={TestScreen} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
