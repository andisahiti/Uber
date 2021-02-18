import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'your api key';

const RouteMap = ({origin, destination}) => {
  const originLoc = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destinationLoc = {
    latitude: 28.470627,
    longitude: -16.263045,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={originLoc} title={'Origin'} />
      <Marker coordinate={destinationLoc} title={'Destination'} />
    </MapView>
  );
};
const styles = StyleSheet.create({
  marker: {
    borderRadius: 50,
    backgroundColor: 'red',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RouteMap;
