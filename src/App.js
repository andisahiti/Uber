import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './navigation/navigation';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

export default App;
