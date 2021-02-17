import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Hambuger from 'react-native-vector-icons/Entypo';

const HamburgerButton = () => {
  return (
    <Pressable style={styles.container} >
      <Hambuger name="menu" size={30} />
    </Pressable>
  );
};

export default HamburgerButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    position: 'absolute',
    top: Platform.OS === 'android' ? 20 : 60,
    left: 10,
    zIndex: 10,
  },
});
