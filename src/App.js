/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import HoldingScreen from './screens/HoldingScreen';
import { Colors } from './utils/constant';

function App() {

  return (
    <SafeAreaView style={styles.rootView}>
      <HoldingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootView:{
    flex:1,
    backgroundColor: Colors.grey
  }
});

export default App;
