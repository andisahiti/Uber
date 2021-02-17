import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const NativeClick = (props) => {
  let Click = TouchableOpacity;
  if (Platform.OS === 'android') {
    Click = TouchableNativeFeedback;
  }
  return <Click onPress={props.onPress}>{props.children}</Click>;
};

export default NativeClick;

const styles = StyleSheet.create({});
