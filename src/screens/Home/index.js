import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import HomeMap from './Sections/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HamburgerButton from '../../components/HamburgerButton';
import HomeSearch from './Sections/HomeSearch';
import Geolocation from 'react-native-geolocation-service';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [screen, setScreen] = useState(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={50} color="black" />
    </View>,
  );
  
  const requestLocationPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
            setLocation({
              latitude,
              longitude,
            });
          },
          (error) => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const requestLocationPermissionIos = async () => {
    try {
      await Geolocation.requestAuthorization('whenInUse').then((res) => {
        if (res === 'granted') {
          Geolocation.getCurrentPosition(
            (position) => {
              const {latitude, longitude} = position.coords;
              setLocation({
                latitude,
                longitude,
              });
            },
            (error) => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('location permission denied');
          alert('Location permission denied');
        }
      });
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermissionAndroid();
    } else {
      requestLocationPermissionIos();
    }
  }, []);

  useEffect(() => {
    if (location) {
      setScreen(
        <>
          <HamburgerButton />
          <HomeMap location={location} />
          <CovidMessage />
          <HomeSearch location={location} />
        </>,
      );
    }
  }, [location]);

  return <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>;
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
  },
});
